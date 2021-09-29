<template>
  <div>
    <s-row>
      <s-col span="24"><div class="content" /></s-col>
    </s-row>
    <s-row>
      <s-col span="12"><div class="content" /></s-col>
      <s-col span="12"><div class="content" /></s-col>
    </s-row>
    <s-row>
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
    </s-row>
    <s-row>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
      <s-col span="2"><div class="content" /></s-col>
    </s-row>
  </div>
  <div>
    <s-row gutter="10">
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
      <s-col span="6"><div class="content" /></s-col>
    </s-row>
    <s-row gutter="10">
      <s-col span="6" order="4"><div class="content">1 | order-4</div></s-col>
      <s-col span="6" order="3"><div class="content">2 | order-3</div></s-col>
      <s-col span="6" order="2"><div class="content">3 | order-2</div></s-col>
      <s-col span="6" order="1"><div class="content">4 | order-1</div></s-col>
    </s-row>
    <s-row gutter="10">
      <s-col span="18" push="6"><div class="content">col-18 | push-6</div></s-col>
      <s-col span="6" pull="18"><div class="content">col-6 | pull-18</div></s-col>
    </s-row>
    <s-row>
      <s-col span="8"><div class="content">col-8</div></s-col>
      <s-col span="8" offset="8"><div class="content">col-8 | offset-8</div></s-col>
    </s-row>
    <s-row>
      <s-col span="6" offset="8"><div class="content">col-6 | offset-8</div></s-col>
      <s-col span="6" offset="4"><div class="content">col-6 | offset-4</div></s-col>
    </s-row>
    <s-row>
      <s-col span="12" offset="8"><div class="content">col-12 | offset-8</div></s-col>
    </s-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .soft-row {
    margin-bottom: 20px;
    .soft-col {
      .content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
        line-height: 36px;
      }
      &:nth-child(odd) {
        .content {
          background: #d3dce6;
        }
      }
      &:nth-child(even) {
        .content {
          background: #cad7e5;
        }
      }
    }
  }
</style>
