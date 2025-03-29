import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { generateImage } from '../api/generateImage';

const HomeChinese = () => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('高质量');
  const [aspect, setAspect] = useState('square');
  const [style, setStyle] = useState('');
  const [color, setColor] = useState('');
  const [lighting, setLighting] = useState('');
  const [composition, setComposition] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      // 使用客户端API调用
      const response = await generateImage({
        prompt,
        negativePrompt,
        aspect: aspect as 'square' | 'portrait' | 'landscape',
        style,
        color,
        lighting,
        composition
      });
      
      if (response.success) {
        setGeneratedImage(response.imageUrl);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRandomPrompt = () => {
    const randomPrompts = [
      "一个宁静的日本花园，樱花盛开，有一个小鲤鱼池",
      "未来主义城市景观，有飞行汽车和霓虹灯",
      "魔法森林，有发光的蘑菇和仙灯",
      "宇宙景观，有鲜艳的星云和遥远的星系",
      "被热带植被覆盖的古代寺庙废墟"
    ];
    setPrompt(randomPrompts[Math.floor(Math.random() * randomPrompts.length)]);
  };

  const handleClear = () => {
    setPrompt('');
    setNegativePrompt('高质量');
    setStyle('');
    setColor('');
    setLighting('');
    setComposition('');
  };

  return (
    <>
      <Head>
        <title>Raphael AI | 在几秒钟内创建令人惊叹的AI生成图像</title>
        <meta name="description" content="世界首个无限免费AI图像生成器" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Raphael AI Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold">Raphael AI</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/features" className="hover:text-blue-600">功能</Link>
            <Link href="/faq" className="hover:text-blue-600">常见问题</Link>
            <Link href="/pricing" className="hover:text-blue-600">定价</Link>
            <Link href="/expand-image" className="hover:text-blue-600">扩展图像</Link>
            <select className="bg-transparent border border-gray-300 rounded p-1">
              <option value="zh">简体中文</option>
              <option value="en">English</option>
            </select>
          </nav>
        </header>

        <section className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Raphael AI</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            在几秒钟内创建令人惊叹的AI生成图像
          </p>
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="flex space-x-2 text-lg font-semibold mb-3">
              <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">世界首个无限免费AI图像生成器</span>
            </div>
            <div className="flex space-x-8 text-gray-600">
              <span className="flex items-center">
                <span className="font-bold text-blue-600 mr-2">100%</span> 免费
              </span>
              <span className="flex items-center">
                <span className="font-bold text-blue-600 mr-2">✓</span> 由 FLUX.1-Dev 提供支持
              </span>
              <span className="flex items-center">
                <span className="font-bold text-blue-600 mr-2">✓</span> 无需登录
              </span>
              <span className="flex items-center">
                <span className="font-bold text-blue-600 mr-2">∞</span> 无限生成
              </span>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">AI 图像生成器</h2>
              <div className="mb-6">
              <textarea 
                  className="w-full border border-gray-300 rounded p-4 text-gray-800"
                  placeholder="描述提示词... 🇬🇧请用英语输入提示，以获得最佳效果"
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">宽高比</label>
                <select 
                    className="w-full border border-gray-300 rounded p-2 text-gray-800"
                  value={aspect}
                  onChange={(e) => setAspect(e.target.value)}
                >
                    <option value="square">正方形比例</option>
                    <option value="portrait">纵向比例</option>
                    <option value="landscape">横向比例</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">风格</label>
                <select 
                    className="w-full border border-gray-300 rounded p-2 text-gray-800"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value="">无风格</option>
                  <option value="realistic">写实</option>
                  <option value="anime">动漫</option>
                    <option value="digital">数字艺术</option>
                  <option value="oil">油画</option>
                    <option value="watercolor">水彩</option>
                    <option value="sketch">素描</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">颜色</label>
                  <select 
                    className="w-full border border-gray-300 rounded p-2 text-gray-800"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option value="">无颜色</option>
                    <option value="vibrant">鲜艳</option>
                    <option value="pastel">柔和</option>
                    <option value="monochrome">单色</option>
                    <option value="dark">暗色</option>
                    <option value="bright">明亮</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">光照</label>
                  <select 
                    className="w-full border border-gray-300 rounded p-2 text-gray-800"
                    value={lighting}
                    onChange={(e) => setLighting(e.target.value)}
                  >
                    <option value="">无光照</option>
                    <option value="soft">柔和光照</option>
                    <option value="dramatic">戏剧光照</option>
                    <option value="studio">工作室光照</option>
                    <option value="neon">霓虹光照</option>
                    <option value="natural">自然光照</option>
                </select>
              </div>
            </div>
            
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">负面提示词</label>
                <textarea 
                  className="w-full border border-gray-300 rounded p-3 text-gray-800"
                  placeholder="您不想看到的内容..."
                  rows={2}
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-4">
            <button 
                  className={`flex-1 py-3 px-4 rounded-lg font-bold text-lg ${
                    isGenerating
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? '生成中...' : '生成'}
                </button>
                <button 
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
                  onClick={handleClear}
                >
                  清除
                </button>
                <button 
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
                  onClick={handleRandomPrompt}
                >
                  随机
            </button>
          </div>
          
              {generatedImage && (
                <div className="mt-8 flex justify-center">
              <div className="text-center">
                <img 
                  src={generatedImage} 
                  alt="生成的 AI 图像" 
                      className="rounded-lg shadow-lg max-w-full max-h-[512px]" 
                    />
                    <div className="flex justify-center space-x-4 mt-4">
                      <a 
                        href={generatedImage}
                        download="raphael-ai-image.png"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                      >
                        下载
                      </a>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded">
                    分享
                  </button>
                </div>
              </div>
              </div>
            )}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">获取灵感</h2>
          <p className="text-center text-lg mb-10">从其他人使用 Raphael 的创作中获得灵感</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
              <div key={num} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={`/examples/example-${num}.jpg`} 
                  alt={`示例 ${num}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto py-16 px-4 bg-gray-50 rounded-xl my-16">
          <h2 className="text-3xl font-bold text-center mb-10">Raphael 的主要功能</h2>
          <p className="text-center text-lg mb-12">体验下一代 AI 图像生成 - 强大、免费且注重隐私。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">零成本创作</h3>
              <p>世界上第一个完全免费的 AI 图像生成器，没有使用限制或注册要求。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">最先进的质量</h3>
              <p>由 FLUX.1-Dev 模型提供支持，提供具有卓越细节和艺术风格控制的逼真图像。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">高级文本理解</h3>
              <p>卓越的文本到图像功能，能够准确解释复杂的提示和文本叠加功能。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">闪电般快速生成</h3>
              <p>优化的推理管道，确保快速图像生成，而不会影响质量。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">增强的隐私保护</h3>
              <p>零数据保留政策 - 您的提示和生成的图像永远不会存储在我们的服务器上。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">多风格支持</h3>
              <p>创建各种艺术风格的图像，从逼真到动漫，从油画到数字艺术。</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">数百万用户的信任</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300万+</div>
              <div className="text-xl">活跃用户</div>
              <div className="text-gray-600">每月活跃用户</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,530</div>
              <div className="text-xl">创建的图像</div>
              <div className="text-gray-600">每分钟生成的图像</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-xl">用户评分</div>
              <div className="text-gray-600">平均图像质量评分</div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <img src="/logo.png" alt="Raphael AI Logo" className="h-8 w-8 mr-2" />
                  <span className="text-xl font-bold">Raphael AI</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Raphael AI: 由 FLUX.1-Dev 提供支持的免费、无限的 AI 图像生成器。无需注册，没有限制。
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                  <h3 className="font-semibold mb-3">关于</h3>
                <ul className="space-y-2">
                    <li><Link href="/features" className="text-gray-600 hover:text-blue-600">功能</Link></li>
                    <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600">定价</Link></li>
                    <li><Link href="/partners" className="text-gray-600 hover:text-blue-600">合作伙伴</Link></li>
                </ul>
              </div>
              <div>
                  <h3 className="font-semibold mb-3">工具</h3>
                <ul className="space-y-2">
                    <li><Link href="/expand-image" className="text-gray-600 hover:text-blue-600">扩展图像</Link></li>
                </ul>
              </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">© 2025 • Raphael AI 保留所有权利。</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">隐私政策</Link>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">服务条款</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomeChinese; 