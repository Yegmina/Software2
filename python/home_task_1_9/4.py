import random

class Car:
    def accelerate(self, speed_changer):
        speed_changer=int(speed_changer)
        self.current_speed=self.current_speed+speed_changer
        if self.current_speed<=0:
            self.current_speed=0
            print(f"speed of the car is 0 so car stopped")
        elif self.current_speed>self.maximum_speed:
            print(f"speed reached the limit, now it is {self.current_speed}")
            self.current_speed=self.maximum_speed
        else:
            print(f"now speed is {self.current_speed}")

        return self.current_speed #to have ability to write speed=accelerate...


    def drive(self, hours):
        self.travelled_distance+=self.current_speed*hours
        print(f"the new travelled distance is {self.travelled_distance}")
        return self.travelled_distance
    def __init__(self, registration_number, maximum_speed, current_speed=0, travelled_distance=0):
        self.registration_number = registration_number
        self.maximum_speed = maximum_speed
        self.current_speed = current_speed
        self.travelled_distance = travelled_distance

"""main"""
car1=Car("ABC-123",142)
print(vars(car1)) #print all properties of car1 object

cars=[]
for i in range(1, 10+1):
    #print(i)
    car = Car("ABC-", 142)
    car.maximum_speed=random.randint(100, 200)
    car.registration_number+=str(i)
    print(vars(car))  # print all properties of car1 object
    cars.append(car)

time=0
racing=True
while racing:
    #if (next((car for car in cars if car.travelled_distance > 10000), None)) is not None: #wanted to try something fun but it is not working as expected hah
        #break
    for car in cars:
        car.accelerate(random.randint(-10,15))
        car.drive(1)
        print(vars(car))  # print all properties of car object
        if car.travelled_distance>10000:
            print(f"car {car.registration_number} win!")
            racing=False
            break

    time+=1
