<template>
    <div>
        <div class="title">
            {{ profile.title }}
        </div>

        <div class="social">
            <div v-for="(social, index) in profile.social" :key="index" class="social_icon">
                <a :href="`${social.path}`" class="social_path">
                    <img :src="social.img_path" alt="" class="social_icon_img">
                </a>
            </div>
        </div>

        <div class="rich_text">
            {{ profile.rich_text }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profile: {
                title: '최선호',
                social: [
                    {
                        name: 'github',
                        path: 'https://github.com/preferchoi',
                        img_path: require('@/assets/icons/github.svg')
                    },
                    {
                        name: 'gmail',
                        path: '1',
                        img_path: require('@/assets/icons/gmail.svg')
                    }
                ],
                rich_text: '안녕하세요'
            }
        }
    }
}
</script>

<style>
.title {
    color: #022A55;
    font-family: bjpg;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    padding-bottom: 5px;
    padding-top: 0px;
    text-align: center;
    text-transform: none;
    
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
}

.social {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.social_icon {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0px;
    padding-right: 15px;
}

.social_path {
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center;
    background: #e8e8e8;
    height: 38px;
    line-height: 38px;
    text-align: center;
    width: 38px;
    border-radius: 19px;
}

.social_icon_img {
    opacity: 1;
    height:25px;
    width:25px;
}

.rich_text {
    color: #546E87;
    font-family: bjpg;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    padding-bottom: 10px;
    padding-top: 5px;
    text-align: center;
    text-transform: none;
}
</style>