/* eslint-disable react-refresh/only-export-components */
import { PcDisplay } from './components/PcDisplay'
import withPriceModel from './components/withPriceModel'

const BasicModel = withPriceModel(PcDisplay)
const ProModel = withPriceModel(PcDisplay, 60)

export { BasicModel, ProModel, withPriceModel }
