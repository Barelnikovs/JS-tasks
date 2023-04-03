export default {
    '/test/': function () {
        return '<b>text</b>';
    },
    '/page1/': function () {
        let arr = [1, 2, 3, 4, 5];
        let pars = ''
        for (let elem of arr) {
            pars += `<p>${elem}</p>`
        }
        console.log(pars)
        return pars;
    },
    '/page2/': function () {
        return 'page2';
    },
    '/page3/': function () {
        return 'page3';
    },
    '/handler/': function ({ post }) {
        console.log(post.a, post.b, post.c, post.d, post.e)
        return Math.round((+post.a + +post.b + +post.c + +post.d + +post.e) / 5)
    }
}