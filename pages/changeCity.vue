<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iSelect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Catrgroy />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import hot from '@/components/changeCity/hot'
import Catrgroy from '@/components/changeCity/categroy'
export default {
  components: {
    iSelect,
    hot,
    Catrgroy
  }
}
</script>

<style lang="scss" scoped>

</style>
