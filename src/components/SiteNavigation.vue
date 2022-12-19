<template>
  <header class="sticky top-0 bg-main-menu shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">Hava Durumu</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="toggleModal"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="addCity"
          v-if="route.query"
        ></i>
      </div>

      <BaseModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
      >
        <div class="text-black">
          <h1 class="text-2xl mb-1">Hakkında:</h1>
          <p class="mb-4">
            Bu site seçtiğiniz ve seçecek olduğunuz şehirlerin şimdiki ve 
            gelecekteki hava durumu tahminlerini görebilmenizi sağlar.
          </p>
          <h2 class="text-2xl">Nasıl Çalışır:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Aramak istediğiniz şehri arama kutusuna yazın.
            </li>
            <li>
              Şehri seçtiğinizde site sizi şehrin şu anki
              hava durumunu göstermek üzere sayfaya yönlendirir.
            </li>
            <li>
              "+" butonunu kullanarak şehri listenize daha sonra anasayfada
              hava durumunu özet olarak görmek üzere kaydedebilirsiniz.
            </li>
          </ol>

          <h2 class="text-2xl">Bir Şehri Silmek:</h2>
          <p>
           Bir şehrin hava durumunu daha fazla takip etmek istemiyorsanız 
           anasayfadaki listeden şehri seçin ve hava durumu bilgilerinin 
           ayrıntılı görüntülendiği sayfanın en alt kısmından "Şehri Listeden Kaldır" butonunu kullanın.
          </p>
          <hr size="8" color="black">
          <h3 class="text-2x1">Hazırlayanlar:</h3>
          <p>
           Amine Hatun ERGİN - Melike SAĞIR - Metin Birikim KARAÇAY - Simge TERZİOĞLU - Zehra AKGÜL
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(
      localStorage.getItem("savedCities")
    );
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem(
    "savedCities",
    JSON.stringify(savedCities.value)
  );

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = locationObj.id;
  router.replace({ query });
};

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
