export class Weather {
  constructor(apiKey = "ae6c67087ac4729b5ebb4e34fb42b781") {
    this.apiKey = apiKey;
  }
  fetchWeather(city) {
    const query = city.trim()
    if (!query) {
      return Promise.reject(new Error("请输入城市名称"))
    }

    return new Promise((resolve, reject) => {
      let xmlhttp
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
      }
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            try {
              const data = JSON.parse(xmlhttp.responseText)
              resolve(data)
            } catch (err) {
              reject(new Error("数据解析失败"))
            }
          }
          else {
            if (xmlhttp.status === 404) {
              reject(new Error("City not found"))
            } else {
              reject(new Error("请求失败，状态码：" + xmlhttp.status))
            }
          }
        }
      }
      xmlhttp.onerror = () => {
        reject(new Error("网络错误"))
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&appid=${this.apiKey}`
      xmlhttp.open("GET", url, true)
      xmlhttp.send()
    })
  }
}
