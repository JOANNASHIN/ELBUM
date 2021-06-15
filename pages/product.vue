<template>
    <main class="fb__product fb__page">
        <h2 class="fb__page__title">제품안내</h2>

        <nav class="fb__product__tab">
            <span class="fb__product__menu" :class="tabActive == '01' ? 'active' : ''" @click="tabActive = '01'">제품 01</span>
            <span class="fb__product__menu" :class="tabActive == '02' ? 'active' : ''" @click="tabActive = '02'">제품 02</span>
        </nav>

        <ul class="fb__product__cont">
            <li v-show="tabActive == '01'" class="fb__product__wrapper">
                <div class="se_component_wrap sect_dsc __se_component_area">

                    <div class="se_component se_video default">
                        <div class="se_sectionArea se_align-center">
                            <div class="se_editArea">
                                
                                <div class="se_viewArea">
                                    <div id="SEDOC-1586235695420--989148807_video_0" data-attachment-id="Vu-_hZ9FByctbx4DA-zFLmHwiMik" class="se_mediaArea __se-component">
                                            <div class="__se_video_frame"><iframe data-attach-video="" width="700" height="393.75" src="https://www.youtube.com/embed/arRMPNKfkbk" frameborder="0" allowfullscreen="" style="width: 700px; height: 393.75px;"></iframe></div>
                                    </div>
                                    <div class="se_editView se_mediaCaption">
                                        <span class="se_textarea">블레이즈 2in1 콘택트 렌즈 세척기</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_paragraph default">
                        <div class="se_sectionArea">
                            <div class="se_editArea">
                                <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
                                    <div class="se_editView">
                                        <div class="se_textView">
                                            <p class="se_textarea"><!-- SE3-TEXT { --><!-- } SE3-TEXT --></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_video default">
                        <div class="se_sectionArea se_align-center">
                            <div class="se_editArea">
                                
                                <div class="se_viewArea">
                                    <div id="SEDOC-1586235695420--989148807_video_1" data-attachment-id="VmxA8nb3ufWrRJEa7CLAMNYHQPUw" class="se_mediaArea __se-component">
                                            <div class="__se_video_frame"><iframe data-attach-video="" width="700" height="393.75" src="https://www.youtube.com/embed/_aeQDOhWKHo" frameborder="0" allowfullscreen="" style="width: 700px; height: 393.75px;"></iframe></div>
                                    </div>
                                    <div class="se_editView se_mediaCaption">
                                        <span class="se_textarea">블레이즈 3in1 안경+렌즈세척기</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_291/1581400744333KbPOE_JPEG/01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_291/1581400744333KbPOE_JPEG/01.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_291/1581400744333KbPOE_JPEG/01.jpg?type=w860" width="1200" height="1799" data-attachment-id="I3xEUYya1A8HkOyHaYe-vZ8aYYY8" alt="">
                    
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_99/1581400744343Y3e8c_JPEG/02.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_99/1581400744343Y3e8c_JPEG/02.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_99/1581400744343Y3e8c_JPEG/02.jpg?type=w860" width="1200" height="2418" data-attachment-id="IjfgT6RHBDYIyVNcR7QN3cI0sOBc" alt="">
                    
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_132/15814007443553TmXr_JPEG/03.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_132/15814007443553TmXr_JPEG/03.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_132/15814007443553TmXr_JPEG/03.jpg?type=w860" width="1200" height="3100" data-attachment-id="IvlsqGifIOzIa-VdGz4feZNaxb1E" alt="">
                    
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_243/1581400744353VwNGu_JPEG/05.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_243/1581400744353VwNGu_JPEG/05.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_243/1581400744353VwNGu_JPEG/05.jpg?type=w860" width="1200" height="1660" data-attachment-id="IRdKzNEzf-7rbjn29l7TwTno-cGA" alt="">
                    
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_4_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_195/1581400744332ed43P_JPEG/06.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_195/1581400744332ed43P_JPEG/06.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_195/1581400744332ed43P_JPEG/06.jpg?type=w860" width="1200" height="1698" data-attachment-id="IROOuqN5aMUmfD4eMoO6cGVkVtak" alt="">
                    
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="se_component se_image default">
                        <div class="se_sectionArea se_align-justify">
                            <div class="se_editArea">
                                <div class="se_viewArea">
                                    <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1586235695420--989148807_image_5_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20200211_30/1581400744337FVvmm_JPEG/07.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img id="SEDOC-1586235695420--989148807_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20200211_30/1581400744337FVvmm_JPEG/07.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20200211_30/1581400744337FVvmm_JPEG/07.jpg?type=w860" width="1200" height="1912" data-attachment-id="I_4hfF268x21inMV-vPTyRZMihZk" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li v-show="tabActive == '02'" class="fb__product__wrapper">
                <div class="_9F9CWn02VE" style="margin-bottom: 24px;"><div class="editor_wrap se_smartstore_wrap"><div><div class="se-viewer se-theme-default" lang="ko-KR">
                <div class="se-main-container">
                <div class="se-component se-image se-l-default" id="SE-7075f361-1547-4dbe-821e-d2a5f53af2ed">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-7075f361-1547-4dbe-821e-d2a5f53af2ed&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210416_197/1618521057915S7HPH_JPEG/00.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210416_197/1618521057915S7HPH_JPEG/00.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210416_197/1618521057915S7HPH_JPEG/00.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-acab8dba-a8f4-4f04-9be2-88ce0a8c6cf8">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-e5f5482c-c496-47c0-8c20-aeabd80e1899"><span style="" class="se-fs-fs38 se-ff-   " id="SE-35b9f3ea-91b0-4f46-9323-c5521c929bbc">540도 마그네틱 케이블</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-27556eaf-b5f9-4511-a7e6-ee682e21f760">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-27556eaf-b5f9-4511-a7e6-ee682e21f760&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_231/16157501308176m19N_JPEG/01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_231/16157501308176m19N_JPEG/01.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_231/16157501308176m19N_JPEG/01.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-c56b1957-bf62-417f-80bd-67c8f577aec6"><span style="" class="se-fs- se-ff-   " id="SE-a4bf82f7-3fff-469d-8440-eb08d9fd1c79">540도 케이블</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-9466b608-0c98-45a5-ad5e-808615a1e91e">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-b5b03fc8-b357-4bcc-b3ac-0afc914a80ec"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-e3750ac7-94f3-4d44-9696-9c9e2ba04902">마그네틱 케이블은 케이블 선 중간 중간에 있는</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-eb30ee98-caae-4e55-b123-1a97cf805287"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-b7227001-48fc-4f62-8c52-7b4ec5448e30">자석 때문에 고속 충전이 안되는 경우가 많이 있습니다</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-34af7258-f2bb-4887-b157-2363894b3490"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-5ed502fc-3aff-4342-a2a5-15d787592258">저희 블레이즈 에서는 수 많은 마그네틱 케이블을</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-3247866a-012e-495b-addd-50fb033f89b5"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-d50b8aa5-840a-472c-93c1-11fee0510dbd">직접 테스트 하여 최고의 완벽한 고속 케이블을</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-138ae178-b10f-47c8-af03-34f538640121"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-7d7d968b-4a67-40d2-bba6-b2ca8e868cbc">제작 하였습니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-8b37c233-e005-4279-815d-4beac7463c9b">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-5dc2dc62-6dcc-497a-b866-cb756210a728"><span style="" class="se-fs-fs38 se-ff-   " id="SE-03c51a8d-0fe8-4a3d-a176-6366f24d2b78">고속 충전 테스트</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-6f795f3e-bbf8-4482-ac38-a22d26cb4192">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-6f795f3e-bbf8-4482-ac38-a22d26cb4192&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_230/1615750130815vJFyJ_JPEG/02.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_230/1615750130815vJFyJ_JPEG/02.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_230/1615750130815vJFyJ_JPEG/02.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-555e6a4e-35ac-4e09-b30e-788379628c94"><span style="" class="se-fs- se-ff-   " id="SE-03c98821-3b44-43c8-8246-0e42a160a06a">테스트</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-61f35404-c504-4d72-8e7f-3803f1fee449">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-61f35404-c504-4d72-8e7f-3803f1fee449&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_1/1615750130848En6Yg_JPEG/03.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_1/1615750130848En6Yg_JPEG/03.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_1/1615750130848En6Yg_JPEG/03.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-2d039af1-3dcc-42ba-ab6a-98e8f2ecc7ca">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-c0f29ba9-5ae5-44da-bbe2-8cb2c8a1ec75"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-6c079219-1418-4c43-8250-fd11604644ef">마그네틱 케이블은 고속 충전이 관건 입니다.</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-cb79ce5d-c424-48b4-8ade-9fb85bc54900"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-3adb3684-d8ed-4eee-a61d-dcb1bb1cb439">고속 충전의 포인트를 알아야 합니다.</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-be641c38-2a36-418e-9586-dca653ee023e"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-6ece2d2c-8a98-4933-b40e-de639e1fd029">블레이즈 M502는 마그네틱 케이블은</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-8ec78c4f-ea7c-471d-aac3-24fbff1881af"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-de1a4e3e-1647-46f0-9948-eac8888149c5">단연 최고라 자부 합니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-d8c3c3f2-ca77-4706-9989-10882cdf9666">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-cb200006-579e-48cc-bf92-af5d84c086d8"><span style="" class="se-fs-fs34 se-ff-   " id="SE-42b7a85b-d63d-46d6-b6e0-27e359d54b53"> TPE 소재</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-2a9b56c8-cb00-4d86-b4f0-b42ced415fec">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-2a9b56c8-cb00-4d86-b4f0-b42ced415fec&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_178/1615750130815t8N0c_JPEG/04.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_178/1615750130815t8N0c_JPEG/04.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_178/1615750130815t8N0c_JPEG/04.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-7ddc52f2-d9a4-415d-8ec4-0e67bacc4824"><span style="" class="se-fs- se-ff-   " id="SE-4956daf6-16b2-4f77-9f01-904a6fcbc3a4">소재</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-cab114ed-c749-42aa-b732-15906d207d0d">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-0c0756e4-a0d1-4bea-b9d3-18ad86ef839c"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-ba650853-e0ce-40c0-b9f9-968bd5c4a118">케이블 소재 또한 TPE 소재로 제작되어 일반 고무</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-060838fd-cecd-4e8e-b1cd-685fdedc0fab"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-e3239ab0-01d4-4091-8a7c-bff8ef5efe0f">케이블과는 다른 퀄리티를 보장 합니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-985b5eb4-1f7d-43db-8e5f-de690c2dc808">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-a3ee0d1a-3bd9-4309-8b32-43504bb37243"><span style="" class="se-fs-fs38 se-ff-   " id="SE-8109d34f-b7f4-4b65-b7f0-fd0bdb00d396">540도 회전</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-4a931086-12ce-4312-ac41-921eb6fbf699">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-4a931086-12ce-4312-ac41-921eb6fbf699&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_63/16157501308224sBMW_JPEG/05.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_63/16157501308224sBMW_JPEG/05.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_63/16157501308224sBMW_JPEG/05.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-86b9ee4b-d980-48c0-a76a-b2dcb18b36cf"><span style="" class="se-fs- se-ff-   " id="SE-1b0babd4-c1a6-4c45-95bd-8bead846c0de">540도 회원</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-c3b2fcf1-1926-42f6-bb4b-b77bcf09527f">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-2521f250-60a0-4344-9b5d-312eb615c8c8"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-3734da32-a8f6-41ec-9232-03688a57819f">헤드 부분이 360도 + 180도 회전으로</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-e34a3506-ceb8-4eb7-8da5-e8729ad3c007"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-49d3646f-5961-431f-97b6-7b61c284d387">540도의 자유로운 사용이 가능합니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-f7a61737-d263-4025-a08d-b94e00fcc22c">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-21976336-bb5f-4db5-bf25-94ca5029752d"><span style="" class="se-fs-fs38 se-ff-   " id="SE-97915583-d0e8-40b3-a7c2-06b29e2aa314">N52 자력</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-ead30a45-2eae-4f45-90b8-3d43ba9b0ca3">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-ead30a45-2eae-4f45-90b8-3d43ba9b0ca3&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_264/1615750130845gDMRk_JPEG/06.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="https://shop-phinf.pstatic.net/20210315_264/1615750130845gDMRk_JPEG/06.jpg?type=w860" data-src="https://shop-phinf.pstatic.net/20210315_264/1615750130845gDMRk_JPEG/06.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-4100af5b-bc2b-4c66-a65e-d5073f2fc1c9"><span style="" class="se-fs- se-ff-   " id="SE-e99e3337-ef43-4058-bc97-24465a6eaa9b">강한 자력</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-2b13a5c6-3cce-4bad-9216-8c8aac630d06">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-3100fc3e-fdbe-49ff-a18a-cd585d5ea254"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-2654183c-eb68-43c4-96ed-9816c104a15e">자석도 규격이 있습니다. 블레이즈 M502는 N52의</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-3ea34985-8ce5-4526-a289-df3e2d6ae46b"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-32c60d6d-bf68-45b6-ad72-6fcdca1aae8d">강한 자력으로 제작된 제품으로 일반 제품과는</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-b1616291-caaf-4d45-a477-623338d88b3b"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-bcebe88c-1be9-45c5-980e-2734a86815f5">차별화된 자력을 보유한 제품입니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-52952462-beb4-48ef-9ed2-9285c4bef44c">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-34ec8b52-78cd-427c-bd08-edb7681728be"><span style="" class="se-fs-fs38 se-ff-   " id="SE-b072dc58-10ef-40db-a9d3-f20375ca6461">스마트 칩</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-40df49b9-6fd2-4740-b6f5-c090dd9eda44">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-40df49b9-6fd2-4740-b6f5-c090dd9eda44&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_43/1615750130995UidK6_JPEG/07.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=" data-src="https://shop-phinf.pstatic.net/20210315_43/1615750130995UidK6_JPEG/07.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-1c2b90bd-7682-4a69-9d61-e114a5063f5e"><span style="" class="se-fs- se-ff-   " id="SE-3bda5cd3-dd92-4e1e-ab5b-9b2eb09aa01c">스마트 칩</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-8278622e-76f7-41d3-b28f-87f0bf612124">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-91e0f6f0-a866-45b5-91b7-7d9f6ea88ec7"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-07f23b04-a428-4b9f-8f00-b6122786ae41">스마트칩 장착으로 과전압 및 과전류로 부터</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-416bbc98-e854-4bfb-9d05-85457feb6cdb"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-570b9c1a-e6b4-4343-8294-20a78f3cf241">스마트폰의 수명을 보호 합니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-96e1d239-7d86-4291-be5c-0fc680a1a7aa">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-e095aee5-e1c7-45cb-9cbb-173a408e3af8"><span style="" class="se-fs-fs38 se-ff-   " id="SE-1d2742c8-2221-4181-a69d-badccb1fe1df">C타입 / 라이트닝 / 5핀</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-64caa9e9-c225-4807-be91-3d820854c036">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-64caa9e9-c225-4807-be91-3d820854c036&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_145/1615750131143E0nCw_JPEG/08.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=" data-src="https://shop-phinf.pstatic.net/20210315_145/1615750131143E0nCw_JPEG/08.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-1f99e54e-ed13-4450-937d-bc29d6105ca1"><span style="" class="se-fs- se-ff-   " id="SE-4961997c-1a07-44fa-adc9-480bb980e1f3">모든 기종 사용</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-f386f304-389b-450e-8c32-8f2beebd0cdb">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-97dc84fd-6105-4175-86ad-acee6c245180"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-e323cbf5-8f44-4fcc-8ea7-d51cd2d7f082">C타입 / 라이트닝 8핀 / 5핀의 구성으로</span></p><!-- } SE-TEXT --><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="line-height:1.8;" id="SE-f7c349e3-3f3f-4226-9ff1-d2e4ba47fe20"><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-2f8d2b54-ee80-4848-8dad-72ec865a2170">어느 스마트폰이든 사용이 가능합니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>                <div class="se-component se-quotation se-l-quotation_bubble" id="SE-048d241b-60e0-4a79-bc6d-8e504f2a81de">
                    <div class="se-component-content">
                        <div class="se-section se-section-quotation se-l-quotation_bubble">
                            <blockquote class="se-quotation-container">
                                <div class="se-module se-module-text se-quote"><!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-3f4829d5-3d77-4eb5-91a1-fb6b1cefb895"><span style="" class="se-fs-fs38 se-ff-   " id="SE-ca9c3ce0-4b3c-46e3-98ed-af471f96f0d4">최강의 유연성</span></p><!-- } SE-TEXT --></div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="se-component se-image se-l-default" id="SE-f9fac55f-e685-429c-b612-8b011907f29b">
                    <div class="se-component-content se-component-content-fit">
                        <div class="se-section se-section-image se-l-default se-section-align-center">

                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot;:&quot;SE-f9fac55f-e685-429c-b612-8b011907f29b&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20210315_90/1615750131196W11NP_JPEG/09.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}" area-hidden="true">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=" data-src="https://shop-phinf.pstatic.net/20210315_90/1615750131196W11NP_JPEG/09.jpg?type=w860" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            <div class="se-module se-module-text se-caption"><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-c75d285a-7b54-4c4e-b6fd-26b4676ad392"><span style="" class="se-fs- se-ff-   " id="SE-e8f4fcf4-e630-41d4-859b-ac29e9ec8ab2">유연성 강조</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-b4b267c3-5642-4829-92ff-5e89896749e7">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">

                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align-center " style="" id="SE-30707ed1-19ac-4237-b3b7-d4c661104da7"><span style="color:#000000;" class="se-fs- se-ff-  se-style-unset " id="SE-38b699b6-8fc0-4d15-a40e-9857a8edeea6">'</span><span style="color:#000000;" class="se-fs-fs15 se-ff-  se-style-unset " id="SE-5bbd03ac-49ec-4c23-9cb0-48567b3b43f5">강하면서 부드럽게 사용하실수 있습니다</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>   
                   <div class="se-360vr-fullscreen"></div></div>
</div></div></div></div>
            </li>
        </ul>
    </main>
</template>

<script>

export default {
    data() {
        return {
            tabActive: "01"
        }
    },

    mounted() {

    },

    methods: {

    }
}
</script>
