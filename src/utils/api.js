import data from "../../data.json";
import { filter, find, map, startsWith, orderBy, reject } from "lodash";

export function getImages(path = null) {
    if (path) {
        return orderBy(filter(data, function (o) { 
            return startsWith(o.path, '/locations/' + path); 
        }));
    } else {
        return map(data, function (o) { return o; });
    }

}
