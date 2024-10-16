import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Beeswarm from './graphics/Beeswarm/Beeswarm'
import ConsumptionBoxPlot from './graphics/Food-Affordability/ConsumptionBoxPlot'
import DivergingBoxPlot from './graphics/Food-Affordability/DivergingBoxPlot'
import DotChart from './graphics/Food-Affordability/DotChart'
import LineChart from './graphics/LineChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Beeswarm,
  ConsumptionBoxPlot,
  DivergingBoxPlot,
  DotChart,
  LineChart
}
