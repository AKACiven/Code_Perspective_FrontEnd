<template>
  <div class="app-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
          <section class="chart-container">
            <el-row>
              <el-col :span="12">
                <div id="chartPie" style="width:100%; height:800px;"/>
              </el-col>
            </el-row>
          </section>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
          <el-table
            :data="tabledata"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-divider></el-divider>
          <el-tree
            class="filter-tree"
            :data="treedata"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
          </el-tree>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { checkResult } from '@/api/table'

export default {
  data() {
    return {
      hasdata: 0,
      chartPie: null,
      piedata: [],
      tabledata: [],
      filterText: '',
      treedata: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.fetch_result()
  },
  mounted() {
  },
  methods: {
    drawPieChart() {
      this.chartPie = echarts.init(document.getElementById('chartPie'))
      this.chartPie.setOption({
        title: {
          text: 'Main Character Chart',
          subtext: '对象性格',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['尽责性', '外倾性', '宜人性', '情绪性', '开放性']
        },
        series: [
          {
            name: '分析结果',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.piedata,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    fetch_result() {
      checkResult().then(response => {
        this.hasdata = response.hasdata
        this.piedata = response.piedata
        this.treedata = response.treedata
        this.tabledata = response.tabledata
        if (this.hasdata === 0) {
          this.$alert('请先在工作页面上传文件！', '服务器没有文件', {
            confirmButtonText: '前往工作页面',
            callback: action => {
              this.$router.push({
                path: '/Work/WorkSpace'
              })
            }
          })
        }
        this.drawPieChart()
      })
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 200%;
  float: left;
}
</style>
