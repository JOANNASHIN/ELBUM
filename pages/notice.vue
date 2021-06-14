<template>
    <main class="fb__notice fb__page">
    <h2 class="fb__page__title">공지사항</h2>

    <section class="fb__bbs">
        <table class="table-default fb__bbs__table">
            <colgroup>
                <col width="840">
                <col width="*">
            </colgroup>
            <thead>
                <tr>
                <th>제목</th>
                <th class="date"> 작성일자</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td colspan="2">
                        <details>
                            <summary>
                                    <div class="notice__row">
                                        <div class="notice__row__title">
                                        <div>
                                            <mark class="noti"><em>공지</em></mark> <span>신제품 출시 안내</span>
                                        </div>
                                        </div>
                                        <div class="notice__row__date"><span>2021.06.01</span></div>
                                    </div>
                                    <div class="notice__row__cont">
                                        <p></p>
                                    </div>
                            </summary>
                            <div class="fb__notice__answer">
                                신제품이 출시되었습니다.
                            </div>
                        </details>
                </td>
                </tr>
            </tbody>
        </table>
    </section>
    
    <section data-v-3913ab82="" class="pagination__wrapper pagination__wrapper__type--3" style="display: none;">
        <div data-v-3913ab82="" class="pagination">
            <div data-v-3913ab82="" class="pagination__box">
                <button data-v-3913ab82="" data-test="92" disabled="disabled" class="pagination__btn__allLeft disabled">
                처음다음페이지
                </button> <button data-v-3913ab82="" disabled="disabled" class="pagination__btn__left disabled">
                이전페이지
                </button> 
                <ul data-v-3913ab82="" class="pagination__number">
                <li data-v-3913ab82="" class="pagination__list"><span data-v-3913ab82="" class="fb__font__n"><b data-v-3913ab82="">1</b></span></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">2</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">3</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">4</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">5</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">6</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">7</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">8</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">9</button></li>
                <li data-v-3913ab82="" class="pagination__list"><button data-v-3913ab82="" class="fb__font__n">10</button></li>
                </ul>
                <button data-v-3913ab82="" class="pagination__btn__right">
                다음페이지
                </button> <button data-v-3913ab82="" disabled="disabled" class="pagination__btn__allRight disabled">
                끝다음페이지 
                </button>
            </div>
        </div>
    </section>
    </main>
</template>

<script>
import $ from "jquery";
window.$ = $;

export default {
    data() {
        return {
            isUserScrolling : 0,
            startCount: 0,
            count1: {
                from: 0,
                to: 20
            },
            count2: {
                from: 0,
                to: 40
            },
            count3: {
                from: 0,
                to: 100
            },
            count4: {
                from: 0,
                to: 90
            },
        }
    },

    created() {
    },

    mounted() {
    },

    methods: {
        
    }
}
</script>