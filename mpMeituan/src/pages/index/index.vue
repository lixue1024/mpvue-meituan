<template>
  <div class="container">
    <location :city="city"></location>
    <mtSwiper :swiperArr="swiperArr"></mtSwiper>
    <mtnav :navs="navs"></mtnav>
    <!-- 广告 -->
    <a href="" class="sign">
      <img mode="widthFix" src="/static/images/jiangli.png" alt="">
    </a>
    <groupbook :groupbook="groupbook"></groupbook>
    <mtad :adArr="adArr"></mtad>
    <mtguess :guess="guess"></mtguess>
  </div>
</template>

<script>
import location from '@/components/location'
import mtSwiper from '@/components/mtswiper'
import mtnav from '@/components/mtnav'
import groupbook from '@/components/groupbook'
import mtad from '@/components/mtad'
import mtguess from '@/components/mtguess'
import  QQMapWX  from '@/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js'

var qqmapsdk = new QQMapWX({
    key: 'TIRBZ-UVNH3-RDH3E-YVQO6-QLVGH-E3F2S' // 必填
})

export default {
  data() {
    return {
      city: '获取中',
      swiperArr: [],
      navs: [],
      groupbook: [],
      adArr: [],
      guess: []
    }
  },
  methods: {
    getLocation() {
      let that = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          console.log(latitude)
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: function(res) {
              if (res.status === 0) {
                that.city = res.result.address_component.city
                that.getGuess(latitude, longitude)
              }
            },
            fail: function(res) {
              console.log(res)
            }
          })
        }
      })
    },
    getSwiperData() {
      let that = this
      wx.request({
        url: 'https://nei.netease.com/api/apimock/f24b78ec29760fc9073f012abfd4c4f3/index/swiper',
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.statusCode === 200) {
              that.swiperArr = res.data.data
            }
          }
        }
      })
    },
    getNavs() {
      let that = this
      wx.request({
        url: 'https://nei.netease.com/api/apimock/f24b78ec29760fc9073f012abfd4c4f3/index/entry',
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.statusCode === 200) {
              that.navs = res.data.data
            }
          }
        }
      })
    },
    getBooks() {
      let that = this
      wx.request({
        url: 'https://nei.netease.com/api/apimock/f24b78ec29760fc9073f012abfd4c4f3/index/pingtuan',
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.statusCode === 200) {
              that.groupbook = res.data.data
            }
          }
        }
      })
    },
    getAds() {
      let that = this
      wx.request({
        url: 'https://nei.netease.com/api/apimock/f24b78ec29760fc9073f012abfd4c4f3/index/ad',
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.statusCode === 200) {
              that.adArr = res.data.data
            }
          }
        }
      })
    },
    getGuess(latitude, longitude) {
      let that = this
      wx.request({
        url: 'https://nei.netease.com/api/apimock/f24b78ec29760fc9073f012abfd4c4f3/index/like',
        success(res) {
          if (res.statusCode === 200) {
            if (res.data.statusCode === 200) {
              // that.guess = res.data.data
              let arr1 = res.data.data
              let arrdis = arr1.map((v, i) => {
                return {
                  latitude: v.distance.lat,
                  longitude: v.distance.lng,
                }
              })
              qqmapsdk.calculateDistance({
                from: {
                        latitude: latitude,
                        longitude: longitude
                      },
                to: arrdis,
                success(res2) {
                  if (res2.status === 0) {
                    that.guess = res.data.data.map((v, i) => {
                      v.dis = res2.result.elements[i].distance
                      return v
                    })
                  }
                },
                fail(res2) {
                  console.log(res2)
                }
              })
            }
          }
        }
      })
    }
  },
  components: {
    location,
    mtSwiper,
    mtnav,
    groupbook,
    mtad,
    mtguess
  },
  mounted() {
    this.getLocation()
    this.getSwiperData()
    this.getNavs()
    this.getBooks()
    this.getAds()
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5px;
  .sign {
    width: 100%;
    img {
      width: 100%;
      padding: 5px;
    }
  }
}

</style>
