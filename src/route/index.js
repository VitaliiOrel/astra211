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
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

router.get('/ex2', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Product',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

router.get('/ex3', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Product',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

router.get('/ex4', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Product',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

router.get('/ex5', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Product',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

router.get('/ex6', function (req, res) {
  res.render('prod-cont', {
    layout: 'product',
    title: 'Product',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
    },
  })
})

module.exports = router
