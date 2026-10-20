import { Weather } from './weather.js'
import { updateUI } from './UI.js'

const weatherApp = new Weather()
const search = async () => {
  const input = document.querySelector('.search-bar')
  const city = input.value.trim()
  if (!city) {
    alert('请输入城市名称')
    input.focus()
    return
  }

  try {
    const data = await weatherApp.fetchWeather(city)
    if (data) updateUI(data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    alert('城市未找到或网络请求失败')
  }
}
document.querySelector('.search button').addEventListener('click', search)
document.querySelector('.search-bar').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') search()
})

window.addEventListener('load', async () => {
  document.getElementById('loading').style.display = 'none'
  const data = await weatherApp.fetchWeather('Shanghai')
  if (data) updateUI(data)
})

const tiltElements = document.querySelector('.card')

VanillaTilt.init(tiltElements, {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5
})