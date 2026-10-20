export const updateUI = (data) => {
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind

  document.querySelector('.city').innerText = `Weather in ${name}`
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
  document.querySelector(".description").innerText = description
  document.querySelector(".temp").innerText = `${temp}°C`
  document.querySelector(".humidity").innerText = `湿度: ${humidity}%`
  document.querySelector(".wind").innerText = `风速: ${speed} km/h`

  document.querySelector(".weather").classList.remove("loading")
  document.body.style.backgroundImage = `url('https://picsum.photos/1600/900/?${name}')`
}
