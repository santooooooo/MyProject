const categories = ['NewConfirmed', 'TotalConfirmed', 'NewDeaths',　'TotalDeaths',　'NewRecovered',　'TotalRecovered',]
const getEntry = sessionStorage.getItem('entry') 

new Vue({
    el:'#vue',
    data: {
        categories: categories,
        select: '',
    },
    created: function () {
        if (!getEntry) {
            sessionStorage['entry'] = 0   
        }
    },
    methods: {
        selectCategory: function () {
            sessionStorage['select'] = this.select
        },
        next: function () {
            switch (getEntry) {
                case '0':
                    sessionStorage['entry'] = '27'
                    break
                case '27':
                    sessionStorage['entry'] = '54'
                    break
                case '54':
                    sessionStorage['entry'] = '81'
                    break
                case '81':
                    sessionStorage['entry'] = '108'
                    break
                case '108':
                    sessionStorage['entry'] = '135'
                    break
                case '135':
                    sessionStorage['entry'] = '162'
                    break
                case '162':
                    sessionStorage['entry'] = '189'
                    break
                default:
                    sessionStorage['entry'] = '216'
                    break
            }
        },
        back: function () {
            switch (getEntry) {
                case `216`:
                    sessionStorage['entry'] = '189'
                    break
                case '189':
                    sessionStorage['entry'] = '162'
                    break
                case '162':
                    sessionStorage['entry'] = '135'
                    break
                case '135':
                    sessionStorage['entry'] = '108'
                    break
                case '108':
                    sessionStorage['entry'] = '81'
                    break
                case '81':
                    sessionStorage['entry'] = '54'
                    break
                case '54':
                    sessionStorage['entry'] = '27'
                    break
                default:
                    sessionStorage['entry'] = '0'
                    break
            }
        }
    }
})
