
<template>
    <div>
      <el-steps :space="100" :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
      <el-step title="步骤 4"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>

    <el-steps :space="100" :active="1">
      <el-step title="步骤 1" icon="edit"></el-step>
      <el-step title="步骤 2" icon="upload"></el-step>
      <el-step title="步骤 3" icon="picture"></el-step>
    </el-steps>

  <el-steps :space="100" direction="vertical" :active="1">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },

    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      }
    }
  }
</script>