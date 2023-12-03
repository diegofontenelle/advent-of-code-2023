package main

import (
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func partOne(lines []string) int {
	sum := 0
	re := regexp.MustCompile("[0-9]")

	for i := 0; i < len(lines); i++ {
		if lines[i] != "" {
			nums := re.FindAllString(lines[i], -1)

			num, _ := strconv.Atoi(nums[0] + nums[len(nums)-1])

			sum += num
		}
	}

    return sum
}

func partTwo(lines []string) int {
    sum := 0
	re := regexp.MustCompile("\\d")
    re1 := regexp.MustCompile("one")
    re2 := regexp.MustCompile("two")
    re3 := regexp.MustCompile("three")
    re4 := regexp.MustCompile("four")
    re5 := regexp.MustCompile("five")
    re6 := regexp.MustCompile("six")
    re7 := regexp.MustCompile("seven")
    re8 := regexp.MustCompile("eight")
    re9 := regexp.MustCompile("nine")

    for i := 0; i < len(lines); i++ {
        if lines[i] != "" {
            nums := re1.ReplaceAllString(lines[i], "o1ne")
            nums = re2.ReplaceAllString(nums, "t2wo")
            nums = re3.ReplaceAllString(nums, "t3hree")
            nums = re4.ReplaceAllString(nums, "f4our")
            nums = re5.ReplaceAllString(nums, "f5ive")
            nums = re6.ReplaceAllString(nums, "s6ix")
            nums = re7.ReplaceAllString(nums, "s7even")
            nums = re8.ReplaceAllString(nums, "e8ight")
            nums = re9.ReplaceAllString(nums, "n9ine")

            numbers := re.FindAllString(nums, -1)

			num, _ := strconv.Atoi(numbers[0] + numbers[len(numbers)-1])

			sum += num
            
        }
    }

    return sum
}

func main() {
	data, err := os.ReadFile("./input")

	if err != nil {
		panic(err)
	}

	lines := strings.Split(string(data), "\n")
    fmt.Println(partOne(lines))
    fmt.Println(partTwo(lines))
}
