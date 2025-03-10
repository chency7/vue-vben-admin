<script lang="ts" setup>
import { computed } from 'vue';

import { AuthPageLayout } from '@vben/layouts';
import { preferences } from '@vben/preferences';

const appName = computed(() => preferences.app.name);
const logo = computed(() => '/static/logo.svg');
const pageTitle = computed(() => `湘村云哨`);
const pageDescription = computed(() => ``);
</script>

<template>
  <AuthPageLayout
    :app-name="appName"
    :logo="logo"
    :toolbar="false"
    :page-description="pageDescription"
    :page-title="pageTitle"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
