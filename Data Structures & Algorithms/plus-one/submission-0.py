class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        temp=0
        for i in digits:
            temp =temp*10 + i
        temp=temp+1
        res=[]
        while (temp):
            digit=temp%10
            temp=temp//10
            res.append(digit)
        return res[::-1]