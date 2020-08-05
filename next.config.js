const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images')
//Tailwind
const withSass = require('@zeit/next-sass')
const tailwindCss = require('tailwindcss')

module.exports = withPlugins([[optimizedImages], withImages()])
