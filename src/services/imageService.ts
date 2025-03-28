import axios from 'axios';

interface TurnstileResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
}

interface GenerateImageResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export class ImageService {
  private static readonly TURNSTILE_API_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  private static readonly TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  private static readonly TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

  static async generateImage(prompt: string, token: string): Promise<GenerateImageResponse> {
    try {
      // 1. 验证 Turnstile token
      const turnstileVerification = await this.verifyTurnstileToken(token);
      
      if (!turnstileVerification.success) {
        return {
          success: false,
          error: 'Failed to verify human verification'
        };
      }

      // 2. 调用 Turnstile API 生成图像
      const response = await axios.post(this.TURNSTILE_API_URL, {
        prompt,
        token,
        sitekey: this.TURNSTILE_SITE_KEY,
        secret: this.TURNSTILE_SECRET_KEY
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.data.success) {
        return {
          success: false,
          error: response.data['error-codes']?.join(', ') || 'Failed to generate image'
        };
      }

      return {
        success: true,
        imageUrl: response.data.imageUrl
      };

    } catch (error) {
      console.error('Error generating image:', error);
      return {
        success: false,
        error: 'Failed to generate image'
      };
    }
  }

  private static async verifyTurnstileToken(token: string): Promise<TurnstileResponse> {
    try {
      const formData = new URLSearchParams();
      formData.append('secret', this.TURNSTILE_SECRET_KEY || '');
      formData.append('response', token);

      const response = await axios.post('https://challenges.cloudflare.com/turnstile/v0/siteverify', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error verifying Turnstile token:', error);
      return {
        success: false,
        challenge_ts: '',
        hostname: '',
        'error-codes': ['verification-failed']
      };
    }
  }
} 