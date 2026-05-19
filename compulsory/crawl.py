import requests
from bs4 import BeautifulSoup
import time
import random
import json

articles = {
    "1. 数的基本运算 & 不等式 & 函数（ 不含导数 ）": "https://www.luogu.com/article/a4us0qi4",
    "2. 三角函数 & 平面向量": "https://www.luogu.com/article/h95xklas",
    "3. 立体几何 & 空间向量": "https://www.luogu.com/article/bs8p9mf2",
    "4. 解析几何": "https://www.luogu.com/article/jcm2r3y0",
    "5. 数列【 未齐全 】": "https://www.luogu.com/article/2hhmxqua",
    "6. 导数【 未齐全 】": "https://www.luogu.com/article/7r3m5688",
    "7. 统计 & 概率 & 组合": "https://www.luogu.com/article/u07vunzl",
    "8. 其他知识": "https://www.luogu.com/article/84wl6pjy",
    "9. 精妙的解题方法 & 应试要求": "https://www.luogu.com/article/hzlu8qwi",
    "高三数学难题怪题": "https://www.luogu.com/article/9ek4dk4r",
}

# Replace cookies and headers with your own values
# Copy as curl and use https://curlconverter.com/
cookies = {
    "cf_clearance": "******",
    "_uid": "******",
    "__client_id": "******",
}

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "referer": "https://www.luogu.com.cn/",
    "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    "sec-ch-ua-arch": '"arm"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"138.0.7204.158"',
    "sec-ch-ua-full-version-list": '"Not)A;Brand";v="8.0.0.0", "Chromium";v="138.0.7204.158", "Google Chrome";v="138.0.7204.158"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"macOS"',
    "sec-ch-ua-platform-version": '"15.6.0"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
}


def fetch_article_content(url):
    try:
        response = requests.get(url, cookies=cookies, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        content = soup.find(id="lentille-context")
        return content.text if content else "内容未找到"
    except requests.RequestException as e:
        return f"请求错误: {e}"


def main():
    for title, url in articles.items():
        content = fetch_article_content(url)
        content = json.loads(content)["data"]["article"]["content"]
        # parse content as json and save it to a file
        filename = f"download/{title}.md"
        with open(filename, "w", encoding="utf-8") as file:
            file.write(content)
        print(f"已保存文章: {title} 到文件: {filename}")
        time.sleep(random.uniform(1, 3))


if __name__ == "__main__":
    main()
