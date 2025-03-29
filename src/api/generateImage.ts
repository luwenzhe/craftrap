import { ImageGenerationRequest, ImageGenerationResponse, User, canUserGenerateMoreImages } from '../models/User';

// 修改为客户端API调用，而不是服务器端API路由
// 这样在Cloudflare静态部署中也能工作
export async function generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Generating image with params:', {
      prompt: request.prompt,
      negativePrompt: request.negativePrompt,
      aspect: request.aspect,
      style: request.style,
      color: request.color,
      lighting: request.lighting,
      composition: request.composition
    });
    
    // 返回示例图像URL（从公共文件夹中的示例图像）
    const exampleImages = [
      '/examples/example-1.jpg',
      '/examples/example-2.jpg',
      '/examples/example-3.jpg',
      '/examples/example-4.jpg',
      '/examples/example-5.jpg',
      '/examples/example-6.jpg',
      '/examples/example-7.jpg',
      '/examples/example-8.jpg',
    ];
    
    const randomImageUrl = exampleImages[Math.floor(Math.random() * exampleImages.length)];
    
    return {
      imageUrl: randomImageUrl,
      prompt: request.prompt,
      generatedAt: new Date(),
      success: true
    };
  } catch (error) {
    console.error('Error generating image:', error);
    return {
      imageUrl: '',
      prompt: request.prompt,
      generatedAt: new Date(),
      success: false,
      error: 'Failed to generate image. Please try again.'
    };
  }
}

// 客户端兼容的用户验证函数
export async function handleImageGenerationRequest(
  request: ImageGenerationRequest, 
  user: User | null
): Promise<{ response: ImageGenerationResponse; userUpdated: boolean }> {
  // Cloudflare静态导出模式下，您需要调用外部API来处理用户验证和限制
  // 这里提供一个模拟实现
  
  // 访客用户，提供无限功能
  if (!user) {
    // 移除访客限制，允许访客无限生成图片
    const response = await generateImage(request);
    return { response, userUpdated: false };
  }
  
  // 生成图片不再有限制
  const response = await generateImage(request);
  
  if (response.success) {
    // 在实际应用中，您需要调用外部API来更新用户的使用情况
    // 例如通过fetch调用您的Cloudflare Worker API
    
    return { response, userUpdated: true };
  }
  
  return { response, userUpdated: false };
} 