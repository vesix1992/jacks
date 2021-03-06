import { FETCH_DRILLHOLES, FETCH_DRILLHOLE, VIEW_DRILLHOLE } from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_DRILLHOLES:
			return action.payload;
		case FETCH_DRILLHOLE:
			return action.payload;
		case VIEW_DRILLHOLE:
			return state.filter(drillhole => drillhole.id === action.payload);
		default:
			return state;
	}
}