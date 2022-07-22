<template>
  <div class="app-container">
    <el-col :xs="24" :sm="24" :lg="8">
      <el-upload
        class="upload-demo"
        drag
        action="https://d2b93d65-113e-4883-91bc-7c2f16a8dc66.mock.pstmn.io/posts/"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="20"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传文件</div>
      </el-upload>
      <el-divider></el-divider>
      <el-row>
        <el-button @click="analyse_gen" type="primary">进行分析</el-button>
      </el-row>
    </el-col>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 20 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    },
    analyse_gen() {
      this.$router.push({
        path: '/Work/ShowBoard'
      })
    }
  }
}
</script>
