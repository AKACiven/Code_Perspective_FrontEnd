<template>
  <div class="app-container">
    <el-carousel height="150px" indicator-position="none">

      <el-carousel-item v-for="item in dataimg" :key="item.value" style="width: 100%;height: 40px;text-align: center;">

        <div class="carousel-explain">

          <div class="italictext">

            <p class="textp2">{{ item.txt }}</p>

             <p class="textp" v-html="item.txt2"></p>

          </div>

        </div>

      </el-carousel-item>

    </el-carousel>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataimg: [

        {

          txt: '张云雷',

          txt2:

            '张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！张云雷！'

        },

        {

          txt: '孟鹤堂',

          txt2:

            '孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！孟鹤堂！'

        },

        {

          txt: '秦霄贤',

          txt2:

            '秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！秦霄贤！'

        },

        {

          txt: '赵坤啊',

          txt2:

            '赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊赵坤啊'

        }

      ]
    }
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {}
}
</script>
