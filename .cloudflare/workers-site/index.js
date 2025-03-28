import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

/**
 * 为Cloudflare Pages添加的worker配置
 */
addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // 从KV获取静态资源
    return await getAssetFromKV(event);
  } catch (e) {
    // 如果资源不存在或出错，返回404页面或回退到首页
    let pathname = new URL(event.request.url).pathname;
    
    // 对于SPA，返回index.html
    if (!pathname.includes('.')) {
      try {
        return await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
        });
      } catch (e) {
        // 如果仍然失败，返回通用错误页面
        return new Response('Page not found', { status: 404 });
      }
    }
    
    return new Response('Resource not found', { status: 404 });
  }
} 