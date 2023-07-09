export default {
    '/test/': function() {
		let arr = [1,2,3,4,5]
        let doc = ''
        for (let i = 0; i < arr.length; i++) {
            doc += `<p> ${String(arr[i])} </p>`
        }
        return doc
	},
	'/page1/': function() {		
		return 'page 1';
	},
    '/page2/': function() {
		return 'page 2';
  },
  '/handler/': function({post}) {
    let runners = {
      daniil: {
        distance: {
          '800m': '1.59',
          '1500m': '3.58',
          '3000m': '8.35',
          '5000m': '14.58',
          '10000m': '31.48',
          '21.1km': '1.09.59',
          '42.2km': undefined,
        }
      },
      alexander: {
        distance: {
          '800m': '1.58',
          '1500m': '3.56',
          '3000m': '8.27',
          '5000m': '14.34',
          '10000m': '30.38',
          '21.1km': undefined,
          '42.2km': '2.18.41',
        }
      },
    }
    let name = post.name
    console.log(post.name)
    console.log(runners.name.distance["800m"])
    return runners.daniil.distance["800m"]
  }
}