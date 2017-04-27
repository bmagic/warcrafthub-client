import React from 'react'
import { Panel, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Moment from 'react-moment'
import './CharacterRaidProgress.scss'

class CharacterRaidProgress extends React.Component {

  getBossLine (name, count, difficulty, quality, timestamp) {
    return (
      <div key={name + count + difficulty + timestamp} className='boss-line'>
        <Row>
          <Col sm={6}>
            <strong>{name}</strong>
          </Col>
          <Col sm={2}>
            <span className={'quality-' + quality}>{difficulty}</span>
          </Col>
          <Col sm={1}>
            {count}
          </Col>
          <Col sm={3}>
            {timestamp &&
            <Moment fromNow>{timestamp}</Moment>
            }
          </Col>
        </Row>
      </div>
    )
  }

  render () {
    const props = this.props
    const that = this
    if (props.raid.bosses) {
      let tooltipContent = []
      let bosses = []
      props.raid.bosses.forEach(function (boss) {
        if (boss.mythicKills > 0) {
          tooltipContent.push(<div key={'M' + boss.name} className='quality-legendary'>M: {boss.name}</div>)
          bosses.push(that.getBossLine(boss.name, boss.mythicKills, 'Mythic', 'legendary', boss.mythicTimestamp))
        } else if (boss.heroicKills > 0) {
          tooltipContent.push(<div key={'H' + boss.name} className='quality-epic'>H: {boss.name}</div>)
          bosses.push(that.getBossLine(boss.name, boss.heroicKills, 'Heroic', 'epic', boss.heroicTimestamp))
        } else if (boss.normalKills > 0) {
          tooltipContent.push(<div key={'N' + boss.name} className='quality-rare'>N: {boss.name}</div>)
          bosses.push(that.getBossLine(boss.name, boss.normalKills, 'Normal', 'rare', boss.normalTimestamp))
        } else if (boss.lfrKills > 0) {
          tooltipContent.push(<div key={'L' + boss.name} className='quality-uncommon'>L: {boss.name}</div>)
          bosses.push(that.getBossLine(boss.name, boss.lfrKills, 'LFR', 'uncommon', boss.lfrTimestamp))
        } else {
          tooltipContent.push(<div key={boss.name} className='quality-common'>{boss.name}</div>)
          bosses.push(that.getBossLine(boss.name, 0, 'No kill', 'common', null))
        }
      })

      const tooltip = (
        <Tooltip id={'tooltip' + props.name.replace(/ /g, '+')}>
          <span className='txt-underline bold'>{props.name}</span>
          {tooltipContent}
        </Tooltip>
      )

      let currentProgress
      if (props.raid.mythicKills > 0) {
        currentProgress =
          <span className='current-progress'>{props.raid.mythicKills}/{props.raid.bosses.length}(M)</span>
      } else if (props.raid.heroicKills > 0) {
        currentProgress =
          <span className='current-progress'>{props.raid.heroicKills}/{props.raid.bosses.length}(H)</span>
      } else if (props.raid.normalKills > 0) {
        currentProgress =
          <span className='current-progress'>{props.raid.normalKills}/{props.raid.bosses.length}(N)</span>
      } else {
        currentProgress = <span className='current-progress'>{props.raid.lfrKills}/{props.raid.bosses.length}(L)</span>
      }

      return (
        <div className='character-progress'>
          <Panel>
            <h2>
              {props.name}:&nbsp;
              <OverlayTrigger placement='top' overlay={tooltip}>
                {currentProgress}
              </OverlayTrigger>
            </h2>
          </Panel>
          <Row>
            <Col md={6}>
              {bosses.splice(0, bosses.length % 2 === 0 ? bosses.length / 2 : (bosses.length / 2) + 1)}
            </Col>
            <Col md={6}>
              {bosses}
            </Col>
          </Row>
        </div>
      )
    } else {
      return null
    }
  }
}

CharacterRaidProgress.propTypes = {
}

export default CharacterRaidProgress
