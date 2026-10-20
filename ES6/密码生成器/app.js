const flags = {
  uppercase: false,
  numbers: false,
  symbols: false,
  length: 5
}
const selectors = {
  copy: 'copy',
  checkbox: 'checkbox',
  slider: 'slider',
  sliderElement: document.querySelector('.slider'),
  button: 'button',
  sliderValue: document.querySelector('.value'),
  input: document.querySelector('input[type="text"]')
}
const generatePassword = () => {
  const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz'
  const characters = {
    uppercase: defaultCharacters.toUpperCase(),
    numbers: '0123456789',
    symbols: '~!@-#$'
  }
  const characterList = [
    defaultCharacters,
    ...(flags.uppercase ? characters.uppercase : ''),
    ...(flags.numbers ? characters.numbers : ''),
    ...(flags.symbols ? characters.symbols : '')
  ].join('')
  return Array.from({ length: flags.length }, () => Math.floor(Math.random() * characterList.length))
    .map(number => characterList[number])
    .join('')
}
selectors.sliderElement.addEventListener('input', event => {
  const value = event.target.valueAsNumber
  selectors.sliderValue.innerText = value
  flags.length = value
})
document.querySelector('#app').addEventListener('click', event => {
  const target = event.target.closest('[data-js-selector]')
  if (!target) return
  switch (target.dataset.jsSelector) {
    case selectors.copy:
      selectors.input.select()
      navigator.clipboard.writeText(selectors.input.value)
        .then(() => {
          console.log('复制成功');
        })
        .catch(err => {
          console.error('复制失败', err);
        })
      break
    case selectors.checkbox: {
      const checkbox = target.matches('input')
        ? target
        : target.control || target.querySelector('input')

      if (!checkbox) break

      flags[checkbox.id] = checkbox.checked
      break
    }
    case selectors.button: {
      selectors.input.value = generatePassword()
      break
    }
  }
})
