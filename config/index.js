module.exports = {
  username: process.env.TEXTNOW_USERNAME || 'yatserv',
  password: process.env.TEXTNOW_PASSWORD || 'wfjsq0531',
  cookies: process.env.TEXTNOW_COOKIES || '',
  recipient: process.env.TEXTNOW_RECIPIENT || '(726) 666-0002',
  message: process.env.TEXTNOW_MESSAGE || 'auto-send message',
  captchaToken: process.env.CAPTCHA_TOKEN || '',
};
