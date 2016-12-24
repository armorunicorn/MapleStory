/*
 	OrpheusMS: MapleStory Private Server based on OdinMS
    Copyright (C) 2012 Aaron Weiss <aaron@deviant-core.net>
    				Patrick Huy <patrick.huy@frz.cc>
					Matthias Butz <matze@odinms.de>
					Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
LudiPQ - 1 - 2 Portal
@author Jvlaple
*/

function enter(pi) {
    var nextMap = 922010200;
    var eim = pi.getPlayer().getEventInstance()
    var target = eim.getMapInstance(nextMap);
    var targetPortal = target.getPortal("st00");
    var avail = eim.getProperty("1stageclear");
    if (avail == null) {
        pi.getPlayer().dropMessage(5, "Some seal is blocking this door.");
        return false;
    }
    else {
        pi.getPlayer().changeMap(target, targetPortal);
        return true;
    }
}