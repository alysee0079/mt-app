<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="cvalue" :disabled="!city.length" placeholder="省份">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: []
    }
  },
  watch: {
    async pvalue (newPvalue) {
      const { status, data: { city } } = await this.$axios.get(`/geo/province/${newPvalue}`)
      if (status === 200) {
        this.city = city.map(item => ({
          value: item.id,
          label: item.name
        }))
        this.cvalue = ''
      }
    }
  },
  async mounted () {
    const { status, data: { province } } = await this.$axios.get('/geo/province')
    if (status === 200) {
      this.province = province.map(item => ({
        value: item.id,
        label: item.name
      }))
    }
  },
  methods: {
    querySearchAsync: _.debounce(async function (query, cb) {
      const self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.includes(query)))
      } else {
        const { status, data: { city } } = await self.$axios.get('/geo/city')
        if (status === 200) {
          self.cities = city.map(item => ({
            value: item.name
          }))
          cb(self.cities.filter(item => item.value.includes(query)))
        } else {
          cb([])
        }
      }
    }, 200),
    handleSelect (item) {
      console.log(item.value)
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/iselect.scss";
</style>
