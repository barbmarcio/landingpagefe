import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  benefits,
  button,
  totalPrice,
  discountPrice
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>R${discountPrice}</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOAGO22"
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R${discountPrice}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
