"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""
from collections import defaultdict
from typing import List
class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        mp=defaultdict(int)

        for i in intervals:
            s = i.start
            e = i.end
            mp[s] +=1
            mp[e] -=1
        room =0
        maxroom = 0
        for t in sorted(mp):
            room += mp[t]
            maxroom= max(maxroom, room)
        return maxroom