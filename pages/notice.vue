<template>
<main class="fb__notice fb__main">
   <h2 class="fb__title--hidden">공지사항</h2>
   <section class="fb__main__visual">
      <h3 class="fb__title--hidden">상단 대표이미지</h3>
      <figure class="visual__text">
         <span class="visual__logo">ELBUM</span>
         <p class="visual__desc">저희는 고객의 성공과 함께 성장합니다.</p>
      </figure>
   </section>
   <section class="notice__search">
      <header class="notice__header">
         <h4 class="notice__title">
            공지사항
         </h4>
      </header>
      <div class="notice__form" style="display:none;">
         <form>
            <fieldset>
               <legend>검색 폼</legend>
               <div class="notice__text__wrap">
                  <input type="text" id="searchText" name="searchText" value="" placeholder="검색어를 입력해주세요" title="검색어"> 
                  <input type="submit" id="btnSearch" value="검색" class="fb__bbs__filter-btn">
               </div>
            </fieldset>
         </form>
      </div>
   </section>
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
                  <a href="/csCenter/notice/noticeDetail?ID=1912">
                     <div class="notice__row">
                        <div class="notice__row__title">
                           <div>
                              <mark class="noti"><em>공지</em></mark> <span>사용/적립 서비스 일시 중단 안내</span> <!---->
                           </div>
                        </div>
                        <div class="notice__row__date"><span>2021.06.01</span></div>
                     </div>
                     <div class="notice__row__cont">
                        <!----> 
                        <p></p>
                     </div>
                  </a>
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
<style lang="scss">
.fb__notice .fb__main__visual {
    margin-bottom: 100px;
}
.fb__notice .notice__search {
  margin-bottom: 20px;
}/* line 9, stdin */
.fb__notice .notice__header {
  padding-top: 28px;
  border-top: 3px solid #000;
}/* line 15, stdin */
.fb__notice .notice__title {
  margin-bottom: 60px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
}/* line 28, stdin */
.fb__notice .notice__nav label {
  display: inline-block;
  margin: 0 5px;
}/* line 31, stdin */
.fb__notice .notice__nav label input {
  display: none;
}/* line 34, stdin */
.fb__notice .notice__nav label input + span {
  display: inline-block;
  overflow: hidden;
  padding: 0 22px;
  color: #787878;
  font-size: 14px;
  border-radius: 25px;
  cursor: pointer;
  line-height: 32px;
}/* line 47, stdin */
.fb__notice .notice__nav label input:checked + span {
  background: #000;
  color: #fff;
}/* line 55, stdin */
.fb__notice .notice__form {
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 0;
}/* line 61, stdin */
.fb__notice .notice__form__info {
  display: inline-block;
  margin-left: 27px;
  color: #787878;
  font-size: 18px;
  line-height: 92px;
}/* line 72, stdin */
.fb__notice .notice__text__wrap {
  display: inline-block;
  width: 360px;
  height: 45px;
  padding-right: 53px;
  background: #f7f7f7;
}/* line 79, stdin */
.fb__notice .notice__text__wrap input[type="text"] {
  width: 100%;
  color: #000;
  padding: 0 20px;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  background: transparent;
  border: 0;
  box-sizing: border-box;
  height: 44px;
}/* line 94, stdin */
.fb__notice .notice__text__wrap input[type="text"]::placeholder {
  color: #787878 !important;
  font-weight: normal;
  font-size: 16px !important;
  line-height: normal !important;
}/* line 103, stdin */
.fb__notice .notice__text__wrap input[type="text"]:-ms-input-placeholder {
  color: #787878 !important;
}/* line 108, stdin */
.fb__notice .notice__text__wrap input[type="submit"] {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 53px;
  height: 45px;
  background: url(/pc/assets/images/customer/icon-search.png) no-repeat 50% 50%;
  text-indent: -9999px;
  border: 0;
}/* line 122, stdin */
.fb__notice .notice__row:after {
    display: block;
    clear: both;        
    content:"";
}
.fb__notice .notice__row {
  display: block;
  padding: 20px 0;
}/* line 127, stdin */
.fb__notice .notice__row__title {
  display: inline-block;
  float: left;
  width: 830px;
  color: #787878;
  line-height: 22px;
}/* line 134, stdin */
.fb__notice .notice__row__title .noti {
  display: inline-block;
  color: #ff3e2f;
  border: 1px solid #ff3e2f;
  margin-right: 10px;
  padding: 2.5px 6px 2px;
  line-height: normal;
  margin-top: -10px;
  vertical-align: 0;
  text-align: center;
  box-sizing: border-box;
  font-size: 0;
}/* line 147, stdin */
.fb__notice .notice__row__title .noti em {
  display: inline-block;
  font-size: 14px;
  line-height: 1;
}/* line 154, stdin */
.fb__notice .notice__row__title > div {
  word-break: normal;
  word-wrap: break-word;
}/* line 158, stdin */
.fb__notice .notice__row__title > div img {
  display: inline-block;
  margin-left: 5px;
  vertical-align: -4px;
}/* line 166, stdin */
.fb__notice .notice__row__date {
  display: inline-block;
  float: right;
  width: 105px;
  color: #666;
  font-size: 14px;
  text-align: center;
}/* line 175, stdin */
.fb__notice .notice__row__cont {
  display: none;
  padding: 30px 20px;
  background: #f7f7f7;
  color: #787878;
  font-size: 14px;
  line-height: 20px;
}/* line 183, stdin */
.fb__notice .notice__row__cont.show {
  display: block;
}/* line 190, stdin */
.fb__notice .button--error {
  color: darkblue;
  text-decoration: underline;
}/* line 195, stdin */
.fb__notice .font-point {
  color: #000;
  font-weight: bold;
}/* line 200, stdin */
.fb__notice .pagination {
  margin-top: 40px;
}/* line 205, stdin */
.fb__bbs {
  display: block;
}/* line 214, stdin */
.fb__bbs table {
    margin: 0 auto;
}
.fb__bbs__table tr:first-child th, .fb__bbs__table tr:first-child td {
  border-top: 0;
}/* line 219, stdin */
.fb__bbs__table th, .fb__bbs__table td {
  color: #787878;
  font-size: 14px;
  vertical-align: middle;
}/* line 225, stdin */
.fb__bbs__table th {
  height: 42px;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #000;
  text-align: left;
}/* line 233, stdin */
.fb__bbs__table th.date {
  text-align: center;
}/* line 237, stdin */
.fb__bbs__table td {
  /* height: 62px; */
  border-top: 1px solid #ddd;
  color: #666;
}/* line 242, stdin */

.fb__bbs__table td:last-of-type {
border-bottom: 1px solid #ddd;}
.fb__bbs__table td a {
  display: block;
}/* line 247, stdin */
.fb__bbs__table--loading {
  text-align: center;
}/* line 252, stdin */
.fb__bbs__noSearch {
  height: 385px;
  line-height: 385px;
  text-align: center;
}/* line 257, stdin */
.fb__bbs__noSearch p {
  margin-bottom: 38px;
  color: #000;
  font-size: 24px;
}/* line 265, stdin */
.fb__bbs__noSearch a {
  display: inline-block;
  width: 151px;
  height: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
}
</style>