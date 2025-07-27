import moment from 'moment';

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  },
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      console.log('src', src)
      return src || `https://picsum.photos/250/250?random=${Math.floor(Math.random() * 1000)}`
    }
  }
}

export const emptyUserImageFilter = {
  filters: {
    emptyUserImage (src) {
      console.log('src', src)
      return src || 'https://www.popdaily.com.tw/shaper/wp-content/uploads/2021/03/94adccd9j7cwkgwc4s4ss0k00qqgnru-1000x1000.png?resize-w=2100&resize-h=2100'
    }
  }
}
