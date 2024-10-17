<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import {computed, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import projects from "../assets/projects.json"
import SiteHeader from "./SiteHeader.vue";
import SiteFooter from "./SiteFooter.vue";

const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const route = useRoute();
const project = ref([]);
const slugsList = ref([]);
const currentIndex = ref(null);

const handleClick = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
}

const onHide = () => {
  visibleRef.value = false;
}

onMounted(() => {
  project.value = projects.find(project => route.params.projectName === project.slug);

  slugsList.value = projects.map(item => item.slug);
  currentIndex.value = slugsList.value.indexOf(route.params.projectName);
});

const links = computed(() => {
  const nextIndex = (currentIndex.value + 1) % projects.length;
  const prevIndex = (currentIndex.value - 1 + projects.length) % projects.length;

  return { next: slugsList.value[nextIndex], prev: slugsList.value[prevIndex] };
});
</script>

<template>
  <div>
    <SiteHeader>
      <div class="space-y-8">
        <div class="">
          <div class="text-5xl font-bold leading-[1.3]">
            {{ project.name }}
          </div>
          <p class="font-light leading-[2]">
            {{ project.tag_line }}
          </p>

          <template v-if="project.urls">
            <a class="text-xs underline inline-block mr-2" v-for="url in project.urls" :href="url" target="_blank"
               rel="noopener noreferrer nofollow">
              {{ url }}
            </a>
          </template>
        </div>

        <div class="flex justify-center md:justify-start gap-2">
						<span v-for="tech in project.tech_used" :key="tech"
                  class="bg-white rounded-full text-[#0083B0] px-3 py-1 text-xs uppercase font-bold">
							{{ tech }}
						</span>
        </div>

        <div class="flex justify-center md:justify-start text-xs text-white">
          <a class="btn btn-primary leading-none rounded-r-none rounded-l"
             :href="'/projects/' + links.prev">
            Previous
          </a>

          <a class="btn btn-primary leading-none rounded-none"
             href="/">Back to all projects</a>

          <a class="btn btn-primary leading-none rounded-l-none rounded-r"
             :href="'/projects/' + links.next">
            Next
          </a>
        </div>
      </div>

      <template #img>
        <img :alt="'Featured screenshot from ' + project.name"
             class="max-w-sm md:max-w-full md:h-full aspect-square md:aspect-video object-cover object-top block rounded-md mb-8 md:mb-0"
             :src="project.featured_image">
      </template>
    </SiteHeader>

    <main class="max-w-6xl mx-auto pt-10 space-y-6 px-8 mb-10">
      <div class="grid md:grid-cols-4 gap-4">
        <div class="order-2 md:order-1 md:col-span-3 space-y-4">
          <ul class="list-inside space-y-4">
            <li v-for="detail in project.details" :key="detail"
                class="pl-2 border-l-4 border-[#0083B0]/50 first-letter:uppercase">
              {{ detail }}
            </li>
          </ul>

          <div>
            Other features include...
            <ul class="list-inside list-disc">
              <li v-for="feature in project.other_features" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <p v-if="project.note">{{ project.note }}</p>
        </div>


        <div class="order-1 md:order-2 flex md:flex-col flex-wrap gap-4">
          <img v-for="(image, index) in project.screenshots" :key="image"
               :alt="'Screenshot from ' + project.name" :src="image"
               class="block w-20 h-20 md:w-full md:h-32 border cursor-pointer object-cover object-top ring-2 ring-blue-200 hover:ring-blue-600 rounded-md ring-offset-2"
               @click.prevent="handleClick(index)">
        </div>
      </div>

      <VueEasyLightbox
          :visible="visibleRef"
          :imgs="project.screenshots"
          :index="indexRef"
          @hide="onHide"
      />
    </main>

    <SiteFooter class=""/>
  </div>
</template>