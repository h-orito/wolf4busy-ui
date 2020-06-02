import Player from '~/components/type/player'
import VillageDays from '~/components/type/village-days'
import VillageSettings from '~/components/type/village-settings'
import VillageParticipants from '~/components/type/village-participants'
import VillageStatus from '~/components/type/village-status'

interface DebugVillage {
  id: number
  name: string
  creator_player: Player
  status: VillageStatus
  setting: VillageSettings
  participant: VillageParticipants
  spectator: VillageParticipants
  day: VillageDays
}

export default DebugVillage
