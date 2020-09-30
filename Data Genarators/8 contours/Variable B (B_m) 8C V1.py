import matplotlib
matplotlib.use("agg")
from sklearn.datasets.samples_generator import make_blobs
from sklearn.datasets import make_gaussian_quantiles
from matplotlib import pyplot
from pandas import DataFrame
import numpy as np
from scipy import interpolate

clusternumber = '4';

# for Bm1
pyplot.title("Gaussian divided into three quantiles", fontsize='small')
AX1, AY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=9)
BX1, BY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=9)
CX1, CY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=8)
DX1, DY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=8)

AX2 = np.copy(AX1)
BX2 = np.copy(BX1)
CX2 = np.copy(CX1)
DX2 = np.copy(DX1)

AX2[:,0] = np.interp(AX1[:,0], (np.min(AX1[:,0]), np.max(AX1[:,0])), (-15, 110))
AX2[:,1] = np.interp(AX1[:,1], (np.min(AX1[:,1]), np.max(AX1[:,1])), (-15, 124))

BX2[:,0] = np.interp(BX1[:,0], (np.min(BX1[:,0]), np.max(BX1[:,0])), (-25, 109))
BX2[:,1] = np.interp(BX1[:,1], (np.min(BX1[:,1]), np.max(BX1[:,1])), (69, 209))

CX2[:,0] = np.interp(CX1[:,0], (np.min(CX1[:,0]), np.max(CX1[:,0])), (69, 209))
CX2[:,1] = np.interp(CX1[:,1], (np.min(CX1[:,1]), np.max(CX1[:,1])), (-19, 119))

DX2[:,0] = np.interp(DX1[:,0], (np.min(DX1[:,0]), np.max(DX1[:,0])), (79, 189))
DX2[:,1] = np.interp(DX1[:,1], (np.min(DX1[:,1]), np.max(DX1[:,1])), (70, 219))


ind = [x for x,y in enumerate(AY1) if y ==0]
pyplot.figure()
pyplot.scatter(AX2[ind][:,0], AX2[ind][:,1], marker='o', s=15, edgecolor='k')
pyplot.savefig("gaussian_scaledCluster"+clusternumber+"A0-1.png")
pyplot.close()
ind = [x for x,y in enumerate(AY1) if y ==1]
pyplot.figure()
pyplot.scatter(AX2[ind][:,0], AX2[ind][:,1], marker='o', s=15, edgecolor='b')
pyplot.savefig("gaussian_scaledCluster"+clusternumber+"A1-1.png")
pyplot.close()
ind = [x for x,y in enumerate(AY1) if y ==8]
pyplot.figure()
pyplot.scatter(AX2[ind][:,0], AX2[ind][:,1], marker='o', s=15, edgecolor='y')
pyplot.savefig("gaussian_scaledCluster"+clusternumber+"A8-1.png")
pyplot.close()




AX3 = AX2.reshape(200,200,2)
AY2 = AY1.reshape(200,200)
BX3 = BX2.reshape(200,200,2)
BY2 = BY1.reshape(200,200)
CX3 = CX2.reshape(200,200,2)
CY2 = CY1.reshape(200,200)
DX3 = DX2.reshape(200,200,2)
DY2 = DY1.reshape(200,200)


level00countB = np.zeros((200,200))
level125countB = np.zeros((200,200))
level25countB = np.zeros((200,200))
level375countB = np.zeros((200,200))
level50countB = np.zeros((200,200))
level675countB = np.zeros((200,200))
level75countB = np.zeros((200,200))
level875countB = np.zeros((200,200))


for i in range(200):
    for j in range(200):
        xval = int(np.floor(AX3[i][j][0]))
        yval = int(np.floor(AX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;        
        elif AY2[i][j] == 0:
            level00countB[xval][yval] = level00countB[xval][yval] + 1;
        elif AY2[i][j] == 1:
            level125countB[xval][yval] = level125countB[xval][yval] + 1;
        elif AY2[i][j] == 2:            
            level25countB[xval][yval] = level25countB[xval][yval] + 1;
        elif AY2[i][j] == 3:
            level375countB[xval][yval] = level375countB[xval][yval] + 1;
        elif AY2[i][j] == 4:            
            level50countB[xval][yval] = level50countB[xval][yval] + 1;
        elif AY2[i][j] == 5:
            level675countB[xval][yval] = level675countB[xval][yval] + 1;
        elif AY2[i][j] == 6:            
            level75countB[xval][yval] = level75countB[xval][yval] + 1;
        elif AY2[i][j] == 7:            
            level875countB[xval][yval] = level875countB[xval][yval] + 1;
        elif AY2[i][j] == 8:            
            level00countB[xval][yval] = level00countB[xval][yval] + 1;


for i in range(200):
    for j in range(200):
        xval = int(np.floor(BX3[i][j][0]))
        yval = int(np.floor(BX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        elif BY2[i][j] == 0:
            level00countB[xval][yval] = level00countB[xval][yval] + 1;
        elif BY2[i][j] == 1:
            level125countB[xval][yval] = level125countB[xval][yval] + 1;
        elif BY2[i][j] == 2:            
            level25countB[xval][yval] = level25countB[xval][yval] + 1;
        elif BY2[i][j] == 3:
            level375countB[xval][yval] = level375countB[xval][yval] + 1;
        elif BY2[i][j] == 4:            
            level50countB[xval][yval] = level50countB[xval][yval] + 1;
        elif BY2[i][j] == 5:
            level675countB[xval][yval] = level675countB[xval][yval] + 1;
        elif BY2[i][j] == 6:            
            level75countB[xval][yval] = level75countB[xval][yval] + 1;
        elif BY2[i][j] == 7:            
            level875countB[xval][yval] = level875countB[xval][yval] + 1;
        elif BY2[i][j] == 8:            
            level00countB[xval][yval] = level00countB[xval][yval] + 1;
            

for i in range(200):
    for j in range(200):
        xval = int(np.floor(CX3[i][j][0]))
        yval = int(np.floor(CX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        elif CY2[i][j] == 7:            
            level00countB[xval][yval] = level00countB[xval][yval] + 1;
        elif CY2[i][j] == 6:
            level125countB[xval][yval] = level125countB[xval][yval] + 1;
        elif CY2[i][j] == 5:
            level25countB[xval][yval] = level25countB[xval][yval] + 1;
        elif CY2[i][j] == 4:
            level375countB[xval][yval] = level375countB[xval][yval] + 1;
        elif CY2[i][j] == 3:
            level50countB[xval][yval] = level50countB[xval][yval] + 1;
        elif CY2[i][j] == 2:
            level675countB[xval][yval] = level675countB[xval][yval] + 1;
        elif CY2[i][j] == 1:
            level75countB[xval][yval] = level75countB[xval][yval] + 1;
        elif CY2[i][j] == 0:
            level875countB[xval][yval] = level875countB[xval][yval] + 1;           
            
for i in range(200):
    for j in range(200):
        xval = int(np.floor(DX3[i][j][0]))
        yval = int(np.floor(DX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        elif CY2[i][j] == 7:            
            level00countB[xval][yval] = level00countB[xval][yval] + 1;
        elif DY2[i][j] == 6:
            level125countB[xval][yval] = level125countB[xval][yval] + 1;
        elif DY2[i][j] == 5:
            level25countB[xval][yval] = level25countB[xval][yval] + 1;
        elif DY2[i][j] == 4:
            level375countB[xval][yval] = level375countB[xval][yval] + 1;
        elif DY2[i][j] == 3:
            level50countB[xval][yval] = level50countB[xval][yval] + 1;
        elif DY2[i][j] == 2:
            level675countB[xval][yval] = level675countB[xval][yval] + 1;
        elif DY2[i][j] == 1:
            level75countB[xval][yval] = level75countB[xval][yval] + 1;
        elif DY2[i][j] == 0:
            level875countB[xval][yval] = level875countB[xval][yval] + 1;

outB = np.zeros((200,200))

for i in range(200):
    for j in range(200):
        if i >= 100:
            #Bp
            if level125countB[i][j] == 0 and level25countB[i][j] == 0 and level375countB[i][j] == 0 and level50countB[i][j] ==0 and level675countB[i][j] == 0 and level75countB[i][j] == 0 and level875countB[i][j] == 0:
                continue;
            elif level875countB[i][j] > 0:
                outB[i][j] = 0.875;
            elif level75countB[i][j] > 0:
                outB[i][j] = 0.75;
            elif level675countB[i][j] > 0:
                outB[i][j] = 0.675;
            elif level50countB[i][j] > 0:
                outB[i][j] = 0.5;
            elif level375countB[i][j] > 0:
                outB[i][j] = 0.375;
            elif level25countB[i][j] > 0:
                outB[i][j] = 0.25;
            elif level125countB[i][j] > 0:
                outB[i][j] = 0.125;
        else:
            #Bn
            if level125countB[i][j] == 0 and level25countB[i][j] == 0 and level375countB[i][j] ==0 and level50countB[i][j] == 0 and level675countB[i][j] == 0 and level75countB[i][j] == 0 and level875countB[i][j] == 0:
                continue;
            elif level00countB[i][j] > 0:
                outB[i][j] = 0;
            elif level125countB[i][j] > 0:
                outB[i][j] = 0.125;
            elif level25countB[i][j] > 0:
                outB[i][j] = 0.25;
            elif level375countB[i][j] > 0:
                outB[i][j] = 0.375;            
            elif level50countB[i][j] > 0:
                outB[i][j] = .5;
            elif level675countB[i][j] > 0:
                outB[i][j] = 0.675;
            elif level75countB[i][j] > 0:
                outB[i][j] = 0.75;            
            elif level875countB[i][j] > 0:
                outB[i][j] = 0.875;
                
                
outB2= outB.reshape(40000)
dfB = DataFrame(dict(B=outB2))
dfB.to_csv(r'E:\Research\CHI Project\Controlled Experiment\4 variables\Data\Bm7.csv')
