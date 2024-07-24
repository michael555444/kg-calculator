import { useQuery } from '@tanstack/react-query'
import { useSettings } from 'entities/calculationSettings'
import { useHeroes } from 'entities/hero'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import api from 'shared/api'
import useHeroesDistributionModel from '../../../heroesCalculator/model/hooks/useHeroesDistributionModel'


const useCalculateTotalMightiestKingdom = () => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const { heroes } = useHeroes()
  const { heroesDistribution } = useHeroesDistributionModel()
  return useQuery({
    queryKey: ['mightiestKingdomTotal', resources, settings],
    queryFn: () =>
      api.mightiestKingdom.calculateTotalMightiestKingdom({
        resources,
        parameters,
        settings,
        heroesData: heroes,
        heroesDistribution,
      }),
    enabled: !!resources,
  })
}

export default useCalculateTotalMightiestKingdom
