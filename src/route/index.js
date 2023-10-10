const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title:
      'Тест по темі "Умовні оператори та імпортування"',
  })
})

router.get('/ex1', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Відповідь №1',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      desc: 'Корм для донних рибок. Вага нетто 25 г.',
      isAvailable: true,
    },
  })
})

router.get('/ex2', function (req, res) {
  res.render('user-cont', {
    layout: 'user',
    title: 'Відповідь №2',
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
    },
  })
})

router.get('/ex3', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Відповідь №3',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      desc: 'Корм для донних рибок. Вага нетто 25 г.',
      isAvailable: true,
    },
  })
})

router.get('/ex4', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Відповідь №4',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      desc: 'Корм для донних рибок. Вага нетто 25 г.',
      isAvailable: false,
    },
  })
})

router.get('/ex5', function (req, res) {
  res.render('prod-cont-unless', {
    layout: 'product',
    title: 'Відповідь №5',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      desc: 'Корм для донних рибок. Вага нетто 25 г.',
      isAvailable: false,
    },
  })
})

router.get('/ex6', function (req, res) {
  res.render('user-cont', {
    layout: 'user',
    title: 'Відповідь №6',
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
      balance: 0,
    },
  })
})

module.exports = router
