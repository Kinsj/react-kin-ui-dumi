import React, { useState } from 'react';
import { SliderBody, SliderGroup, SliderItem, SliderTitle } from 'react-kin-ui';

export default () => {
  return (
    <div>
      <SliderGroup>
        <SliderItem>
          <SliderTitle>第一段标题</SliderTitle>
          <SliderBody>
            <div>第一段内容</div>
            <div>第一段内容</div>
            <div>第一段内容</div>
            <div>第一段内容</div>
          </SliderBody>
        </SliderItem>
        <SliderItem>
          <SliderTitle>第二段标题</SliderTitle>
          <SliderBody>
            <div>第二段内容</div>
            <div>第二段内容</div>
            <div>第二段内容</div>
            <div>第二段内容</div>
          </SliderBody>
        </SliderItem>
        <SliderItem>
          <SliderTitle>第三段标题</SliderTitle>
          <SliderBody>
            <div>第三段内容</div>
            <div>第三段内容</div>
            <div>第三段内容</div>
            <div>第三段内容</div>
          </SliderBody>
        </SliderItem>
      </SliderGroup>
    </div>
  );
}
