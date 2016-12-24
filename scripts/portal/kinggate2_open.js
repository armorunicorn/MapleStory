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
Stage 5: Door before Ergoth - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("kinggate").getState() == 1) {
        pi.warp(990000900, 2);
        if (pi.getPlayer().getEventInstance().getProperty("boss") != null && pi.getPlayer().getEventInstance().getProperty("boss").equals("true")) {
            pi.changeMusic("Bgm10/Eregos");
        }
        return true;
    }
    else {
        pi.playerMessage(5, "This crack appears to be blocked off by the door nearby.");
        return false;
    }
}
