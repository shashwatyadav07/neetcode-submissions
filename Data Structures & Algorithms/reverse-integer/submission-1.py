class Solution:
  def reverse(self, x: int) -> int:
    sign = -1 if x < 0 else 1
    num = abs(x)
    res = 0

    while num:
      digit = num % 10
      if res > 214748364 or (res == 214748364 and digit > 7):
        return 0
      res = res * 10 + digit
      
      num = num // 10

    res = sign * res
    return res
