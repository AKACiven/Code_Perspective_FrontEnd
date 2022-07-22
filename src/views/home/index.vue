<template>
  <div class="app-container">
    <div class="title-container">
      <h3 class="title">Code Perspective Project</h3>
    </div>
    <div>
      <el-divider><i class="el-icon-aim"></i></el-divider>
      <h4 @click="work_gen" class="title2">代码透视项目</h4>
      <el-divider>简介</el-divider>
      <span>代码作为一种程序语言，它和人类的自然语言一样，都是后天习得的。</span>
      <el-divider></el-divider>
      <span>不仅如此，代码和自然语言都是在个体长期社会学习环境和生理环境的作用下习得的，都具有相对稳定的语言特征。</span>
      <el-divider></el-divider>
      <span>自然语言处理的研究表明，不同的文本作者创作的小说或书面语具有不同的语言风格，因此能够通过对文本语言特征的分析能够追溯文本作者的身份。</span>
      <el-divider></el-divider>
      <span>同理，不同程序员在编写同一种含义的代码时，也可能使用不同的代码编写风格。</span>
      <el-divider></el-divider>
      <span>由此看来，可以通过代码的高维特征来追溯代码作者的身份实现代码透视效果。</span>
      <el-divider>更多</el-divider>
    </div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in billboard" :key="item" style="width: 100%; text-align: center;color: #475669 ;">
        <pre>{{ item }}</pre>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  data() {
    return {
      billboard: [
        '具身认知理论：该理论认为认知活动不是单纯的心智活动，它涉及到心理、身体\n' +
        '和环境，是心理、身体和环境交互作用的产物。该理论强调感知-运动系统及其与环境\n' +
        '的交互作用在人类高级的认知加工（如语言理解）活动中的重要作用。语言的具身认\n' +
        '知理论是将具身认知理论应用到语言的加工与理解过程中去的一个特例。语言的具身\n' +
        '认知观认为，人类对于事物概念的理解并非来自于抽象的命题表征，而是来自具体的\n' +
        '身体感知系统。身体状态会直接影响认知过程的进行，语言概念植根于身体的动作和\n' +
        '知觉系统中，概念的意义依赖于知觉与运动。',
        '大五人格理论：该理论认为，人类的人格特质主要包括五类，分别是开放性\n' +
        '（Openness）、责任心（Conscientiousness）、外倾性（Extraversion）、宜人性\n' +
        '（Agreeableness）、神经质（Neuroticism）。这五类人格特质的首字母组成英文单\n' +
        '词 OCEAN，因此该理论又被成为人格的海洋。大五人格理论源于词汇学假设（lexical\n' +
        'hypothesis），即认为人类生活中重要的方面都会用词汇进行描述，如果某个事物重\n' +
        '要且普遍，那么语言中它会被赋予更多的词汇来描述。基于这一假设，一代代的心理\n' +
        '学家通过对一些列描述人类性格的词汇进行定性分类和定量的因素分析，最终发现大\n' +
        '部分描述人格的词汇可以概括成 5 类，即前面介绍的五类人格特质。',
        '代码高维特征空间：在本课题的视角中，二进制码、调用流程、调用依赖以及系\n' +
        '统调用函数特征都归属于一维的分析方法，或者称之为代码的物理空间维度，除了该\n' +
        '维度，本课题拟将代码的通信作为第二维度进行表示，通信是指代码与外界所有的交\n' +
        '互，该维度主要为时间维度特征。除此之外，为了能够分析代码隐式行为，本课题拟\n' +
        '从代码的社会特征进行分析，我们称为社会维度，包括编译环境特征，代码编写偏好\n' +
        '特征以及资源引用特征。构建恶意代码多维特征空间表达结构，可全面映射出代码的\n' +
        '多态性，该结构尽可能完整描述代码的工程事务特征及其背后的创建与实施团队的成\n' +
        '员特征与主观偏好特征，同时有利于建立代码空间与隐式行为空间的映射关系。',
        '微粒社会：当前我们所处的这种新型的社会是高度解析的，是对人高密度的、更\n' +
        '详细的认知。在微粒社会中，人被各种数据精确量化，成为与其他人高度“差异化”\n' +
        '的数字单体。关于这样一种万物互联、人物交互的移动生态，人和物（包括代码）交\n' +
        '换特性，相互代替，物也在感知，记录人的行为与测算人，各种与人相关的物的数据，\n' +
        '是人的行为、需求及状态等的一种外化或映射，物可以提高人的“可量化度”与“可\n' +
        '跟踪性”，通过物来了解人。',
        '全场景：融合物理场景和互联网场景，其中物理场景是例如影院、餐馆等有边界、\n' +
        '可测量、容易识别的具有美学意义的空间。互联网场景是在移动互联网语境下，指人\n' +
        '在当下的生活状态和体验细节，关注和强调人的行为的时空立体感、整体性和关联性。\n' +
        '场景由四个基本要素构成，分别是实时状态、生活惯性、空间与环境、社交氛围。强\n' +
        '调在互联网语境下对人的过往习惯以及与之相关的实时体验的关注。',
        '代码作者心理特征：依托具身认知理论和大五人格理论来看，代码作者的心理特\n' +
        '征主要包括代码作者关于代码编写偏好的具身经验和人格特质这两个方面，还包括一\n' +
        '些基本的社会属性如性别、年龄、受教育程度、文化背景、宗教信仰、是否婚配等。',
        '跨时空深度立体透视：基于代码行为特征构建技术和代码作者心理特征融合技术，\n' +
        '在人、代码、空间、时间之间建立多元、交互的关系，构建代码高维特征和代码作者\n' +
        '心理之间的映射。从心理学角度看，这种关系呼应了人的一种行为模式，为应付复杂\n' +
        '多变的环境，人们需要一条捷径，这就慢慢形成了一套固定的行为模式，当相关情景\n' +
        '被触发时，人们会不假思索地做出反应。通过关注时间维度上的过往习惯和空间维度\n' +
        '上的多重心理特征实现对人的跨时空深度立体透视。'
      ]
    }
  },
  created() {},
  methods: {
    work_gen() {
      this.$router.push({
        path: '/Work/WorkSpace'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$light_gray: #435a93;

.title-container {
  position: relative;

  .title {
    font-size: 40px;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}

.title2 {
  font-size: 20px;
  color: $light_gray;
  margin: 0px auto 0px auto;
  text-align: center;
  font-weight: bold;
}

pre {
  font-size: 24px;
  font-family: "微软雅黑",sans-serif;
  color: black;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
