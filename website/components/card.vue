<template>
  <div class="container">
    <div>
      <s-card>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </s-card>
    </div>
    <div>
      <s-card title="Card title">
        <template #extra><a href="#">more</a></template>
        <div>content</div>
      </s-card>
    </div>
    <div>
      <s-card title="Card title">
        <template #cover><img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" /></template>
        <template #extra><s-button>more</s-button></template>
        <div>content</div>
      </s-card>
    </div>
    <div>
      <s-card title="Card title" insert>
        <template #extra><a href="#">more</a></template>
        <div>content</div>
      </s-card>
    </div>
    <div>
      <s-card title="Card title" insert>
        <template #cover><img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" /></template>
        <template #extra><s-button>more</s-button></template>
        <div>content</div>
      </s-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .container {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 300px;
      margin-right: 20px;
    }
  }
</style>
