import VillageParticipant from '~/components/type/village-participant'

interface VillageVoteSituation {
  available_vote: boolean
  target_list: VillageParticipant[]
  target: VillageParticipant | null
}

export default VillageVoteSituation
