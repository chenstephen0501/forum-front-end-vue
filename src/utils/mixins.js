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
      return src || `https://picsum.photos/250/250?random=${Math.floor(Math.random() * 1000)}`
    }
  }
}

export const emptyUserImageFilter = {
  filters: {
    emptyUserImage (src) {
      return src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`
    }
  }
}
