const staticCacheName = "static-cache-v1.0.8";
const dynamicCacheName = "dynamic-cache-v1.0.8";

const staticAssets = ["./", "./index.html"];

self.addEventListener("install", async (e) => {
	const cache = await caches.open(staticCacheName);
	await cache.addAll(staticAssets);
	console.log("SW install");
});

self.addEventListener("activate", async (e) => {
	const cachesKeys = await caches.keys();
	const checkKeys = cachesKeys.map(async (key) => {
		if (key !== staticCacheName) {
			await caches.delete(key);
			window.applicationCache.swapCache();
		}
	});
	console.log("SW activate");
});

self.addEventListener("fetch", async (event) => {
	console.log("SW Fetch", event.request.url);
	event.respondWith(checkCahce(event.request));
});

async function checkOnline(req) {
	const cache = await caches.open(dynamicCacheName);
	try {
		const res = await fetch(req);
		await cache.put(req, res.clone());
		return res;
	} catch (error) {
		return await cache.match(req);
	}
}

async function checkCahce(req) {
	const cachedResponse = await caches.match(req);
	return cachedResponse || checkOnline(req);
}
